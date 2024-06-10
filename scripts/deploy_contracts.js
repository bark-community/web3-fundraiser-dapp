const hre = require("hardhat");

async function main() {
  await hre.run('compile');
  
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);
  
  const FundraiserFactory = await hre.ethers.getContractFactory("FundraiserFactory");
  const fundraiserFactory = await FundraiserFactory.deploy(deployer.address);
  
  await fundraiserFactory.deployed();
  
  console.log("FundraiserFactory deployed to:", fundraiserFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
