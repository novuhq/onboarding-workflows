import { serve } from "@novu/framework/next";
import { welcomeOnboardingEmail } from "../../echo/client";
import { Client } from '@novu/framework';

const client = new Client({
    /**
     * Enable this flag only during local development
     */
    strictAuthentication: false,
});

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [welcomeOnboardingEmail] });
