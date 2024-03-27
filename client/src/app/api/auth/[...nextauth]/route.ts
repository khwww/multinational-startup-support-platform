import NextAuth, { Session } from "next-auth";
import { OAuthUserConfig } from "next-auth/providers";
import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const credentialsProviderOption: CredentialsConfig<{}> = {
  type: "credentials",
  id: "login-credentials",
  name: "login-credentials",
  credentials: {
    username: { label: "Username", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials: Record<string, unknown> | undefined) {
    if ((credentials && credentials.username === "daegu5302@gmail.com" && credentials.password === "hakwonsin0824!")) {
      return {
        id: "1",
        login: "admin",
        name: "관리자",
        email: "",
        image: "",
      };
    } else if ((credentials && credentials.username === "hakwonsinteam" && credentials.password === "hakwonsinteam@")) {
      return {
        id: "2",
        login: "team",
        name: "사원",
        email: "",
        image: "",
      };
    }

    return null;
  },
};

const googleProviderOption: OAuthUserConfig<{}> = {
  clientId: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  profile: (profile: any) => ({ ...profile, id: profile.sub, login: profile.email, image: profile.picture }),
};

const githubProviderOption: OAuthUserConfig<{}> = {
  clientId: process.env.GITHUB_CLIENT_ID || "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  profile: (profile: any) => ({ ...profile, image: profile.avatar_url }),
};

export default NextAuth({
  pages: {
    signIn: "/login",
    verifyRequest: "/login?verify=1",
    error: "/login",
  },
  providers: [
    CredentialsProvider(credentialsProviderOption),
    GoogleProvider(googleProviderOption),
    GithubProvider(githubProviderOption),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = (user as Session["user"]).id;
        token.login = (user as Session["user"]).login;
      }
      return token;
    },
    session({ session, token }) {
      session.user = { ...session.user, id: token.id as string, login: token.login as string };
      return session;
    },
  },
});
