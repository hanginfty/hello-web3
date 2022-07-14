const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployd();

  console.log("Transactions deployed to :", transactions.address);
};

// main()
//   .then(() => {
//     process.exit(0);
//   })
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   });

const run = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

run();
