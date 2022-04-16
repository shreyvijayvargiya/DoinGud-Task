// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ERC1155Token", {
    from: deployer,
    log: true,
    waitConfirmations: 5,
  });


  // deploying contract and extracting users balance using its address and the NFTs id
  const ERC1155TokenContract = await ethers.getContractFactory("ERC1155Token");
  const ERC1155tokencontract = await ERC1155TokenContract.deploy();
  const userBalance = (await ERC1155tokencontract.balanceOf(deployer, 1))
  console.log(userBalance, "userBalance");
  return userBalance;
  
};
module.exports.tags = ["ERC1155Token"];
