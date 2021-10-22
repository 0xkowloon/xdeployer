import { ConfigExtender } from "hardhat/types";

export const xdeployConfigExtender: ConfigExtender = (config, userConfig) => {
  const defaultConfig = {
    networks: [""],
    contract: "",
    salt: "",
    constructorArgsPath: "",
    signer: "",
    rpcUrls: [""],
  };

  if (userConfig.xdeploy !== undefined) {
    const customConfig = userConfig.xdeploy;
    config.xdeploy = {
      ...defaultConfig,
      ...customConfig,
    };
  } else {
    config.xdeploy = defaultConfig;
  }
};
