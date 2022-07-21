import Web3 from "web3";
import { ChakraProvider } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";

import theme from "../theme";

import { AppProps } from "next/app";
import { provider } from "web3-core";

function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: provider) {
    return new Web3(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
