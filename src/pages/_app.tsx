import { type AppType } from "next/app";

import { api } from "../utils/api";

import { Lato } from "@next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

import "../styles/globals.css";
import Layout from "components/Layout";
import { ThemeProvider } from "context/ThemeContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={lato.className}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
