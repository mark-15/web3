import { InjectedConnector } from "@web3-react/injected-connector";

// Please see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md#specification
// enum CHAINIDS {
//   MAINNET = 1,
//   ROPSTEN = 3,
//   RINKEBY = 4,
//   GOERLI = 5,
//   KOVAN = 42,
// }

export const injected = new InjectedConnector({});
