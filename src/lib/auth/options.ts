import { NextAuthOptions } from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authConfig: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0",
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      if (profile) {
        //@ts-ignore
        token.handle = profile.data.username;
      }
      return token;
    },
    async session({ session, token, user }) {
      //@ts-ignore
      session.accessToken = token.accessToken;
      //@ts-ignore
      session.user.handle = token.handle;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
