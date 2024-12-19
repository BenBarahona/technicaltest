const express = require('express');
const router = express.Router();
const axios = require('axios');
const { ethers } = require("ethers")
const { getContractInfo } = require("../controllers/contractController");

const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/18d403c24e734d5aa93373ed0ca1a3ff");

router.route("/me").get(getContractInfo);

// // @route    GET api/benjamin-apitest
// // @desc     Gets balance and code from provided smart contract address
// router.get('/', async (req, res) => {
//   console.log("Hello World");
//   // try {
    
//   //   console.log("~~~~~~~~", req.query)
//   //   const { contractAddress } = req.query;

//   //   if(!contractAddress){
//   //       return res.status(400).json({error: "Contract address is required"});
//   //   }

//   //   const balance = await provider.getBalance(contractAddress);
//   //   const balanceInEth = ethers.formatEther(balance);

//   //   const contractCode = await provider.getCode(contractAddress);

//   //   return res.status(200).json({
//   //       contractAddress,
//   //       balance: `${balanceInEth} ETH`,
//   //       isContract: contractCode !== "0x",
//   //       contractCode
//   //   });

//   // } catch (err) {
//   //   console.error(err.message);
//   //   return res.status(500).send(`Server Error: Failed to fetch contract information ${err.message}`);
//   // }
// });

module.exports = router;
