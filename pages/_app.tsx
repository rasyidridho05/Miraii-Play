import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <Head>
        <link rel="icon" href="/image/Logo-Bg.png" />
        <title>Miraii Play</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
      <Analytics/>
    </>
  );
};

export default App;
