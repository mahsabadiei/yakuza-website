import NextAuth from "next-auth/next";
import { authConfig } from "@/app/lib/auth/options";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
