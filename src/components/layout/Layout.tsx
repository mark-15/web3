import React, { ReactElement, JSXElementConstructor } from "react";
import Image from "next/image";

import { Flex, Heading } from "@chakra-ui/react";
import { Container } from "./Container";
import { DarkModeSwitch } from "./DarkModeSwitch";

import { Wallet } from "./Wallet";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Wallet />

    <Flex
      justifyContent="center"
      alignItems="center"
      height="45vh"
      bgClip="text"
    >
      <Heading color="text" fontSize="6vw">
        <Image
          alt="Picture of the author"
          width={300}
          height={300}
          src="/logo.png"
        />
      </Heading>
    </Flex>
    {props.children}
  </Container>
);

export default Layout;
