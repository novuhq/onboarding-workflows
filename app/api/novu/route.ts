import { serve } from "@novu/framework/next";
import { client, welcomeOnboardingEmail } from "../../echo/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [welcomeOnboardingEmail] });
