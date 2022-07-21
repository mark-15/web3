import { useEffect } from "react";
import Layout from "../../layout/Layout";

import { useWeb3React } from "@web3-react/core";

import { Converter } from "./Converter";

const Index = () => {
  return (
    <Layout>
      <Converter />
    </Layout>
  );
};

export default Index;
