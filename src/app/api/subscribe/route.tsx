import { NextRequest, NextResponse } from "next/server";
import z from "zod";

import { Resend } from "resend";
import Cloudflare from "cloudflare";
import { render } from "@react-email/components";
import SignUpEmail from "../../../components/SignUpEmail";
import ConfirmationEmail from "@/components/ConfimationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const cloudflare = new Cloudflare({
  apiToken: process.env.CF_API_TOKEN,
  apiEmail: "info@moniet.dev",
});

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const email = body.email!;
  const name = body.name;
  const clientType = body.clientType;
  console.log({
    email,
    name,
    clientType,
  });
  const isValid = z
    .object({
      email: z.email(),
      name: z.string(),
      clientType: z.enum(["customer"]),
    })
    .or(
      z
        .object({
          email: z.email(),
          clientType: z.enum(["vendor"]),
        })
        .strict(),
    )
    .safeParse({
      email,
      name,
      clientType,
    });

  if (!isValid.success) {
    console.log("validation error", isValid.error);
    return NextResponse.json({
      error: "Wrong data provided",
      status: 400,
    });
  }

  const data = isValid.data;

  const prevUser = await cloudflare.kv.namespaces.values
    .get("1d02af370d3540b6b2ed7705636d33f7", data.email.trim(), {
      account_id: "0acea4c6e5c7538a87b39d1b161e32ec",
    })
    .catch((e) => e);

  if (prevUser && prevUser.status < 400) {
    return NextResponse.json({
      error: "Email already exists in waitlist",
      status: 400,
    });
  }

  try {
    await cloudflare.kv.namespaces.values.update(
      "1d02af370d3540b6b2ed7705636d33f7",
      email.trim(),
      {
        account_id: "0acea4c6e5c7538a87b39d1b161e32ec",
        value: JSON.stringify(data),
      },
    );
  } catch (e) {
    console.error(e);
  }

  const html = await render(
    <SignUpEmail
      name={data.clientType === "customer" ? data.name! : " there"}
      clientType={data.clientType}
    />,
  );

  try {
    await resend.emails.send({
      to: [data.email],
      from: "Raluca <raluca@email.tyes.app>",
      html,
      subject: "Tyes // You're added to the waitlist",
    });
  } catch (e) {
    console.error(e);
  }

  if (clientType === "vendor") {
    await resend.emails.send({
      to: ["sales@tyes.app"],
      from: "Site Admin <noreply@email.tyes.app>",
      html: await render(<ConfirmationEmail email={data.email} />),
      subject: "Tyes // A vendor is requested to join tyes app",
    });
  }

  return NextResponse.json({ status: 200 });
};
