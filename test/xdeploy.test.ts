import { useEnvironment } from "./helpers";

describe("Plugin test xdeploy", function () {
  describe("Hardhat Runtime Environment extension", function () {
    useEnvironment("hardhat-project");
    it("Call xdeploy", async function () {
      return this.hre.run("xdeploy");
    });
  });
});
