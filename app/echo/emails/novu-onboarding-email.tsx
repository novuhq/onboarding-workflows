import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
  Tailwind,
  render,
} from "@react-email/components";
import * as React from "react";

interface NovuWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
  welcomeHeaderText?: string;
  belowHeaderText?: string;
  editEmailLink?: string;
  colorChange?: string;
  components?: any;
  userImage?: string;
  teamImage?: string;
  arrowImage?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults: NovuWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Send Multi-channel notifications.</strong>{" "}
          You can send notifications to your users via multiple channels (Email, SMS, Push, and In-App) in a heartbeat.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Add a Notification Center to Your Web App.</strong>{" "}
          Quickly add new channels and integrate an Inbox (Novu Notification Center) into your apps.
          <Link> Discover and connect multiple notification providers.</Link>
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Notification Content Management.</strong>{" "}
          Product and marketing teams want to edit, update and manage notification content recurrently, while engineering teams want to be left alone to build software without constant interrupts.
        </li>
      ),
    },
  ],
  links: ["Join the Community", "Read the docs", "Contact an expert"],
};

export const NovuWelcomeEmail = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links,
  welcomeHeaderText,
  belowHeaderText,
  editEmailLink,
  components,
  userImage,
  teamImage,
  arrowImage,
}: NovuWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Novu Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
                blurwhite: "#f3f3f5",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-blurwhite text-base font-sans">
          <Img
            src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
            width="56"
            height="56"
            alt="Netlify"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">


            {components?.map((item: any, index: any) => {
              return (
                <Section>
                  {item.componentType === "heading" ? (
                    <Column>
                      <h1 style={{ textAlign: 'center' }}>
                        {item.componentText}
                      </h1>
                    </Column>
                  ) : null}

                  {item.componentType === "list" ? (
                      <Column>
                        <ul>
                          {item.componentListItems?.map((item: any, index: number) => (<li className="mb-20" key={index}><strong>{item.title}</strong> {item.body}</li>))}
                        </ul>
                      </Column>
                  ) : null}

                  {item.componentType === 'button' ? (
                    <Column>
                      <Button
                        className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                      >
                        {item.componentText}
                      </Button>
                    </Column>
                  ) : null}

                  {item.componentType === "button-link" ? (
                    <Column>
                      <Link href={item.componentLink} className="rounded-lg bg-brand rounded text-white p-2.5">{item.componentText}</Link>
                    </Column>
                  ) : null}

                  {item.componentType === "image" ? (
                    <Column>
                      <Img
                          src={`https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down`}
                          width="100"
                          height="100"
                          alt="first image"
                          className="mx-auto my-20"
                      />
                    </Column>
                  ) : null}

                  {item.componentType === "image-2" ? (
                    <Column>
                      <Img
                          src={`https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRhamt1NjhsbGJjdm02c3FxbncxejgwdWhtaGU3cWh4cnZhOGhsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Ae7SI3LoPYj8Q/giphy.webp`}
                          alt="second image"
                          className="mx-auto my-20"
                      />
                    </Column>
                  ) : null}

                  {item.componentType === "image-3" ? (
                    <Column>
                      <Img
                          src={`https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzVka3F4M2ExM3F3djUzdjVjM2x5ZXdtYjJzbnR1bTJvMm02Y2lsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qRCXNcgACZ3aQqG1h6/giphy.webp`}
                          alt="third image"
                          className="mx-auto my-20"
                      />
                    </Column>
                  ) : null}

                  {item.componentType === "text" ? (
                      <Section>
                        <Text className={'text-base ' + 'text-' + item.align}>
                          {item.componentText}
                        </Text>
                      </Section>
                  ) : null}
                  {item.componentType === "divider" ? (
                    <Column>
                      {" "}
                      <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Column>
                  ) : null}
                  {item.componentType === "users" ? (
                    <Column>
                      <Section>
                        <Row>
                          <Column align="right">
                            <Img className="rounded-full" src={userImage} width="64" height="64" />
                          </Column>
                          <Column align="center">
                            <Img src={arrowImage} width="12" height="9" alt="invited you to" />
                          </Column>
                          <Column align="left">
                            <Img className="rounded-full" src={teamImage} width="64" height="64" />
                          </Column>
                        </Row>
                      </Section>
                    </Column>
                  ) : null}
                </Section>
              );
            })}

            <Section className="mt-45">
              <Row>
                {links?.map((item: any, index) => (
                  <Column key={index}>
                    <Link className="text-black underline font-bold">
                      <strong>{item.title}</strong> {item.body}
                    </Link>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              Novu, Emek Dotan 109, Apt 2, Modiin, Israel
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NovuWelcomeEmail;

const heading = {
  fontSize: "30px",
  lineHeight: "1.1",
  fontWeight: "700",
  color: "#000000",
};

export function renderEmail(inputs: any, payload: any) {
  return render(<NovuWelcomeEmail {...inputs} {...payload} />);
}
