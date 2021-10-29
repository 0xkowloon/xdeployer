import { HardhatUserConfig } from "hardhat/types";
import "../../../src/index";
import { ethers } from "ethers";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            "0xe1904817e407877ea09135933f39121aa68ed0d9729d301084c544204171d100",
          balance: "100000000000000000000",
        },
      ],
    },
  },
  defaultNetwork: "hardhat",
  xdeploy: {
    contract: "ERC20Mock",
    constructorArgsPath: "./deploy-args.ts",
    salt: ethers.utils.id(Date.now().toString()),
    // Just a testing private key with some Rinkeby & Kovan ether :-D - there is nothing to be gained however by stealing it ;-)
    signer:
      "0xe1904817e407877ea09135933f39121aa68ed0d9729d301084c544204171d100",
    networks: ["rinkeby", "kovan"],
    // A free Infura API key :-D - there is nothing to be gained however by stealing it ;-)
    rpcUrls: [
      "https://rinkeby.infura.io/v3/a6a7e3934ce44d54a27a256079a3b8a2",
      "https://kovan.infura.io/v3/a6a7e3934ce44d54a27a256079a3b8a2",
    ],
    gasLimit: 1.2 * 10 ** 6,
  },
};

export default config;
