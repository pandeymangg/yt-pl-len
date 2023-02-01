import { type AppType } from "next/app";

import { api } from "../utils/api";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={lato.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
