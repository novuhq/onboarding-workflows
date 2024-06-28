import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
  Tailwind,
  render,
} from "@react-email/components";
import * as React from "react";
import { ControlSchema, EmailComponent, ListElementComponent, PayloadSchema } from "../zod/types";

interface NovuWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  welcomeHeaderText?: string;
  belowHeaderText?: string;
  colorChange?: string;
  components?: EmailComponent[];
  userImage: string;
  teamImage: string;
  arrowImage: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NovuWelcomeEmail = ({
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
            {components?.map((item: EmailComponent, index: number) => {
              return (
                <Section key={index}>
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
                          {item.componentListItems?.map((item: ListElementComponent, index: number) => (<li className="mb-20" key={index}><strong>{item.title}</strong> {item.body}</li>))}
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

                  {item.componentType === "image" ? (
                    <Column>
                      <Img
                          src={item.src}
                          width="100"
                          height="100"
                          alt="first image"
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

export function renderEmail(controls: ControlSchema, payload: PayloadSchema) {
  return render(<NovuWelcomeEmail {...controls} {...payload} />);
}
