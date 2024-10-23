import("@nomiclabs/hardhat-ethers");
import("@nomiclabs/hardhat-waffle");

const argv = JSON.parse(env("npm_config_argv"));
if (JSON.stringify(argv.original) !== JSON.stringify(["hardhat", "test"])) {
  require('dotenv').config();
}

import("./tasks/nft");

import { HardhatUserConfig } from "hardhat/config";
import { env } from "./lib/env";

const config: HardhatUserConfig = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: process.env.ETH_PRIVATE_KEY ? [process.env.ETH_PRIVATE_KEY] : [],
    },
  },
};

export default config;
