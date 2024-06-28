import { serve } from "@novu/framework/next";
import { welcomeOnboardingEmail } from "../../novu/workflows";

export const { GET, POST, PUT, OPTIONS } = serve({ workflows: [welcomeOnboardingEmail] });
