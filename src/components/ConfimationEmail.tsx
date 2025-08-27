import {
  Body,
  Container,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const Logo = () => {
  return (
    <Section>
      <Row>
        <Img
          src={
            "https://pub-b7c7de69b6d641409d911c7e3fe4734f.r2.dev/tyes-text-logo.png"
          }
          alt="Tyes Logo"
          width={80}
          height={"auto"}
        />
      </Row>
    </Section>
  );
};

const ConfirmationEmail = ({ email }: { email: string }) => {
  return (
    <Html>
      <Preview>Tyes // Vendor requesting to signup</Preview>
      <Body
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          color: "#333",
          padding: "20px",
          background: "#f9f9f9",
        }}
      >
        <Container>
          <Text>Hi Raluca,</Text>
          <Text>
            A vendor with the email: {email} , has requested to signup to Tyes.
          </Text>
          <Text>
            Please contact them within 24 hours to start he onboarding process.
          </Text>
          <Text>Best,</Text>
          <Text>Tyes Site Admin</Text>
          <Logo />
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmationEmail;
