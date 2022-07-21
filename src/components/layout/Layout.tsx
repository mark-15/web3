import React, { ReactElement, JSXElementConstructor } from "react";

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
    {props.children}
  </Container>
);

export default Layout;
