import React, { useState } from "react";
import {
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

enum NEPTUNECONVERSION {
  BSUD = 3,
}

export const Converter = () => {
  const [nep, setNep] = useState<string | number>(`1.00`);
  const [bsud, setBsud] = useState<string | number>(`3.00`);

  function handleInputChangeNepToBsud(e: { target: { value: string } }) {
    const newNep = e.target.value;
    const newBsud = (parseInt(newNep) * NEPTUNECONVERSION.BSUD).toFixed(2);

    setNep(newNep);
    setBsud(newBsud);
  }

  function handleInputChangeBusdToNep(e: { target: { value: string } }) {
    const newBsud = e.target.value;
    const newNep = (parseInt(newBsud) / NEPTUNECONVERSION.BSUD).toFixed(2);

    setBsud(newBsud);
    setNep(newNep);
  }

  return (
    <HStack spacing="2" width="100%" maxWidth="48rem" pt="1rem" px="1rem">
      <InputGroup>
        <Input
          type="number"
          name="nep"
          value={nep}
          onChange={handleInputChangeNepToBsud}
        />
        <InputRightAddon
          children={
            <Select variant="unstyled" defaultValue="nep">
              <option value="nep">NEP</option>
            </Select>
          }
        />
      </InputGroup>
      <ArrowRightIcon />
      <InputGroup>
        <Input
          type="number"
          name="bsud"
          value={bsud}
          onChange={handleInputChangeBusdToNep}
        />
        <InputRightAddon
          children={
            <Select variant="unstyled" defaultValue="bsud">
              <option value="bsud">BSUD</option>
            </Select>
          }
        />
      </InputGroup>
    </HStack>
  );
};
