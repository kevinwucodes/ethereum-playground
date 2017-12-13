const Web3 = require('web3')

const localrpc = 'http://localhost:8545'
const provider = new Web3.providers.HttpProvider(localrpc)

const web3 = new Web3(provider)

const { eth, toBigNumber } = web3

const { address, abi } = require('./contract.js')

//default account is needed because write operations require a signed operation
//https://ethereum.stackexchange.com/questions/2086/cannot-perform-write-functions-in-smart-contract-invalid-address
eth.defaultAccount = eth.accounts[0]

const contract = eth.contract(abi)
const contractInstance = contract.at(address)

const doit = async () => {
  console.log('initial result', await contractInstance.getResult().toNumber())

  const adding = await contractInstance.addNumbers(2, 4)
  console.log('just added', adding)

  console.log('final result', await contractInstance.getResult().toNumber())
}

doit()
  .then(() => console.log('*** completed ***'))
  .catch(err => console.log('error', err))
