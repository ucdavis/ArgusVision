import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import GitHub from "next-auth/providers/github";

// Filter out providers that don't have required environment variables
const providers = [];

// Add GitHub provider if configured
if (process.env.AUTH_GITHUB_ID && process.env.AUTH_GITHUB_SECRET) {
  providers.push(GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
  }));
}

// Add Microsoft Entra ID provider if configured
if (process.env.AUTH_MICROSOFT_ENTRA_ID_ID && process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET && process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER) {
  providers.push(MicrosoftEntraID({
    clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
    clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
    issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
  }));
}

// If no providers are configured, add a development warning
if (providers.length === 0) {
  console.warn('No authentication providers configured. Please set up environment variables for GitHub or Microsoft Entra ID.');
}

export const { handlers, auth, signIn } = NextAuth({
  providers,
  callbacks: {
    jwt(params) {
      // we want to remove the picture from the token - it's too big
      return {
        ...params.token,
        picture: undefined,
      };
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
