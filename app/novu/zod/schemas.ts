import { z } from 'zod';

// read more about zod at the official webside: https://zod.dev/
export const emailListElementTypeSchema = z.object({title: z.string().default(""), body: z.string().default("")})

export const componentTypeSchema = z.discriminatedUnion('componentType', [
  z.object({ componentType: z.literal('text'), componentText: z.string().default(""), align:z.enum(["left", "center", "right"]).default("center")}),
  z.object({ componentType: z.literal('list'), componentText: z.string().default(""), componentListItems: z.array(emailListElementTypeSchema)}),
  z.object({ componentType: z.literal('image'), componentText: z.string().default(""), src: z.string().default("")}),
  z.object({ componentType: z.literal('heading'), componentText: z.string().default("")}),
  z.object({ componentType: z.literal('button'), componentText: z.string().default("")}),
  z.object({ componentType: z.literal('divider')}),
  z.object({ componentType: z.literal('users')}),
]);

export const zodControlSchema = z.object({
  components: z.array(componentTypeSchema).default([{
    "componentType": "heading",
    "componentText": "Welcome to Novu"
  }, {
    "componentType": "text",
    "componentText": "Congratulations on receiving your first notification email from Novu! Join the hundreds of thousands of developers worldwide who use Novu to build notification platforms for their products.",
    "align": "left"
  }, {
    "componentType": "users"
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
    "componentText": "Ready to get started? Click on the button below, and you will see first-hand how easily you can edit this email content.",
    "align": "left"
  }, {
    "componentType": "button",
    "componentText": "Edit Email"
  }]),
});

export const zodPayloadSchema = z.object({
  teamImage: z.string().url(),
  userImage: z.string().url(),
  arrowImage: z.string().url()
}).default({
  teamImage: "https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/dca73b36-cf39-4e28-9bc7-8a0d0cd8ac70/standalone-gradient2x_2/w=128,quality=90,fit=scale-down",
  userImage: "https://react-email-demo-48zvx380u-resend.vercel.app/static/vercel-user.png",
  arrowImage: "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png"
})
