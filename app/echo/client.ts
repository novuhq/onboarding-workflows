import { Client, workflow } from "@novu/framework";
import { renderEmail } from "./emails/novu-onboarding-email";

export const client = new Client({
  /**
   * Enable this flag only during local development
   */
  strictAuthentication: false,
});

export const welcomeOnboardingEmail = workflow(
  "welcome-onboarding-email",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (inputs) => {
        return {
          subject: "A Successful Test on Novu!",
          body: renderEmail(inputs, payload),
        };
      },
      {
        inputSchema: {
          type: "object",
          properties: {
            components: {
              title: "Add Custom Fields:",
              type: "array",
              default: [{
                "componentType": "heading",
                "componentText": "Welcome to Novu"
              }, {
                "componentType": "text",
                "componentText": "Congratulations on receiving your first notification email from Novu! Join the hundreds of thousands of developers worldwide who use Novu to build notification platforms for their products."
              }, {
                "componentType": "list",
                "componentListItems": [
                  {
                    title: "Send Multi-channel notifications",
                    body: "You can send notifications to your users via multiple channels (Email, SMS, Push, and In-App) in a heartbeat."
                  },
                  {
                    title: "Send Multi-channel notifications",
                    body: "You can send notifications to your users via multiple channels (Email, SMS, Push, and In-App) in a heartbeat."
                  }
                ]
              }, {
                "componentType": "text",
                "componentText": "Ready to get started? Click on the button below, and you will see first-hand how easily you can edit this email content."
              }, {
                "componentType": "button",
                "componentText": "Edit Email"
              }],
              items: {
                type: "object",
                properties: {
                  componentType: {
                    type: "string",
                    enum: [
                      "text", "divider", "button", "button-link", "image", "image-2", "image-3", "heading", "users", "list"
                    ],
                    default: "text",
                  },
                  componentText: {
                    type: "string",
                    default: "",
                  },
                  componentLink: {
                    type: "string",
                    default: "https://enterlink.com",
                    format: "uri",
                  },
                  align: {
                    type: "string",
                    enum: ["left", "center", "right"],
                    default: "center",
                  },
                  componentListItems: {
                    type: "array",
                    default: [],
                    items: {
                      type: "object",
                      properties: {
                        title: {
                          type: "string"
                        },
                        body: {
                          type: "string"
                        }
                      }
                    }
                  }
                },
              },
            },
            welcomeHeaderText: {
              type: "string",
              default: "Welcome to Novu {{helloWorld}}"
            },
            belowHeaderText: {
              title: "Text Under The Welcome Header",
              type: "string",
              default: "Congratulations on receiving your first notification email from Novu! Join the hundreds of thousands of developers worldwide who use Novu to build notification platforms for their products."
            },
          },
        },
      },
    );
  },
  { payloadSchema: {
      type: "object",
      properties: {
        teamImage: {
          title: "Team Image",
          type: "string",
          default:
            "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
          format: "uri",
        },
        userImage: {
          title: "User Image",
          type: "string",
          default:
            "https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png",
          format: "uri",
        },
        arrowImage: {
          title: "Arrow",
          type: "string",
          default:
            "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png",
          format: "uri",
        },
        editEmailLink: {
          title: "Email Link Button Text",
          type: "string",
          default: "https://web.novu.co",
          format: "uri",
        },
        helloWorld: {
          type: "string",
          default: "Hello World"
        },
      }
    }
  },
);
