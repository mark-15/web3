import Web3 from "web3";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";

import theme from "../theme";

import { AppProps } from "next/app";
import { provider } from "web3-core";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: provider) {
    return new Web3(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
