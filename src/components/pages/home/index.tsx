import { Converter } from "./Converter";
import Image from "next/image";

import { Flex, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
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
      <Converter />
    </>
  );
};

export default Index;
