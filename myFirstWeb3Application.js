var Web3 = require('web3');
var web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));
var accounts = web3.eth.accounts;
console.info(accounts.toString());
var balance_coinbase = web3.eth.getBalance(web3.eth.accounts[0]);
//console.info(balance_conbase);
