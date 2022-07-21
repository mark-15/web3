import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallets/connectors";

export const Wallet = () => {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [formattedAccount, setFormattedAccount] = useState<string>("");

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized: boolean) => {
      if (isAuthorized) {
        activate(injected, undefined, true);
      }
    });
  }, []);

  useEffect(() => {
    if (library) {
      library.eth
        .getBalance(account)
        .then((balance: any) => {
          setBalance(balance);
        })
        .catch(() => {
          setBalance(0);
        });

      setFormattedAccount(
        `${account.substring(0, 6)}...${account.substring(account.length - 6)}`
      );
    }
  }, [active, chainId, library]);

  async function connect() {
    await activate(injected);
  }

  async function disconnect() {
    setIsOpen(false);
    deactivate();
  }

  function toggleDetails() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {active ? (
        <Button
          position="fixed"
          top={4}
          right={20}
          colorScheme="teal"
          variant="solid"
          onClick={toggleDetails}
        >
          Wallet Details
        </Button>
      ) : (
        <Button
          position="fixed"
          top={4}
          right={20}
          colorScheme="teal"
          variant="solid"
          onClick={connect}
        >
          Connect Metamask Wallet
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={toggleDetails}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <Tbody>
                  <Tr>
                    <Td>Account</Td>
                    <Td>{formattedAccount}</Td>
                  </Tr>
                  <Tr>
                    <Td>Chain Id</Td>
                    <Td>{chainId}</Td>
                  </Tr>
                  <Tr>
                    <Td>Balance</Td>
                    <Td>{balance}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={disconnect}>
              Disconnect
            </Button>
            <Button colorScheme="blue" onClick={toggleDetails}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
