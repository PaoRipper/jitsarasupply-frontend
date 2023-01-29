import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.css";
import MainLayout from "../components/layout/MainLayout";

import "../public/assets/css/cover.css"
import '../styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />;
    </MainLayout>
  );
}
