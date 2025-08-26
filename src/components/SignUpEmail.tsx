import {
  Body,
  Container,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text
} from "@react-email/components"

const Logo = () => {
  return (
    <Section>
      <Row>
        <Img
          src={
            "https://pub-b7c7de69b6d641409d911c7e3fe4734f.r2.dev/tyes%20logo.svg"
          }
          alt="Tyes Logo"
          width={80}
          height={"auto"}
        />
      </Row>
    </Section>
  )
}

const ForCustomer = ({ name = "there" }) => {
  return (
    <>
      <Text>Hi {name}!</Text>
      <Text>
        We&apos;re thrilled to have you join our waitlist and we&apos;ll be in
        touch really soon with updates on our progress and potential launch
        date.
      </Text>
      <Text>
        We&apos;re working hard, add finishing touches to make it exactly what
        you&apos;re looking for!
      </Text>
      <Text>
        Thank you,
        <br /> Best,
        <br /> Tyes team
      </Text>
      <Hr />
      <Section>
        <Row style={{ width: "50px", marginTop: "20px" }}>
          <Logo />
        </Row>
      </Section>
    </>
  )
}

const ForVendor = () => {
  return (
    <>
      <Text>Hi there!</Text>
      <Text>
        We&apos;re thrilled to have you join our waitlist and we&apos;ll be in
        touch really soon to onboard your venue onto tyes.
      </Text>
      <Text>
        We&apos;re working hard to get tyes out into the market soon and look
        forward to creating great experiences together!
      </Text>
      <Text>
        Thank you,
        <br /> Best,
        <br /> Tyes team
      </Text>
      <Hr />
      <Section>
        <Row style={{ width: "50px", marginTop: "20px" }}>
          <Logo />
        </Row>
      </Section>
    </>
  )
}

const SignUpEmail = ({
  name,
  clientType
}: {
  name: string
  clientType: string
}) => {
  return (
    <Html>
      <Preview>Tyes // Thanks for signing up</Preview>
      <Body
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          color: "#333",
          padding: "20px",
          background: "#f9f9f9"
        }}
      >
        <Container>
          {clientType === "customer" && (
            <ForCustomer name={name.split(" ")?.[0]} />
          )}
          {clientType === "vendor" && <ForVendor />}
        </Container>
      </Body>
    </Html>
  )
}

export default SignUpEmail
