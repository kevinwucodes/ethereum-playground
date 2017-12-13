const Web3 = require('web3')

const localrpc = 'http://localhost:8545'
const provider = new Web3.providers.HttpProvider(localrpc)

const web3 = new Web3(provider)

const { eth } = web3

const accounts = eth.accounts

const weiToEthMultipler = 1000000000000000000

const showAccounts = accounts =>
  accounts.forEach(account => {
    const balance = eth.getBalance(account)
    console.log('balance', balance.dividedBy(weiToEthMultipler).toNumber())
  })

console.log('initial balances')
showAccounts(accounts)

const account1 = eth.accounts[2]
const account2 = eth.accounts[4]

const transaction = (from, to, value) => ({
  from,
  to,
  value
})

const doit = async () => {
  const transactionHash = await eth.sendTransaction(
    transaction(account1, account2, 30 * weiToEthMultipler)
  )
  console.log('transferred some ether, hash is', transactionHash)

  console.log('after transaction balances')
  showAccounts(accounts)
}

doit()
  .then(() => console.log('### all completed ###'))
  .catch(err => console.log('error', err))
