const DataStorage = artifacts.require('./DataStorage.sol')

const acct1 = '0x627306090abab3a6e1400e9345bc60c78a8bef57'
const acct2 = '0xf17f52151ebef6c7334fad080c5704d77216b732'
const acct3 = '0xc5fdf4076b8f3a5357c5e395ab970b5b54098fef'

// contract('DataStorage initialized', accounts => {
//   let instance
//   let inserted
//   let userCount
//   before(async () => {
//     instance = await DataStorage.deployed()
//     userCount = await instance.getUserCount.call()
//   })
//
//   it('should have a count of zero users', () => {
//     const actual = userCount.toNumber()
//     const expected = 0
//     assert.equal(actual, expected, 'should be zero')
//   })
//   it('should NOT be able to get a user of index zero because there are no users', async() => {
//     // const userIndex = await instance.getUserAtIndex(0)
//     // console.log('hello there', userIndex);
//   })
// })
//

contract(`DataStorage with one inserted of ${acct1}`, accounts => {
  let instance
  let tx

  before(async () => {
    instance = await DataStorage.deployed()
    tx = await instance.insert(acct1, 'kevin')
  })

  it('should return the user index number of zero', async () => {
    const q = tx.logs.find(log => log.event === 'insertedUser')

    const actual = q.args.userIndex.toNumber()
    const expected = 0

    assert.equal(actual, expected, 'first user should have index of 0')
  })

  it('should have a user count of 1', async () => {
    const userCount = await instance.getUserCount.call()
    const actual = userCount.toNumber()
    const expected = 1

    assert.equal(actual, expected, 'first user should have just one user count')
  })

  it('should return the address of the inserted user', async () => {
    const userAddress = await instance.getUserAtIndex(0)
    const actual = userAddress
    const expected = acct1

    assert.equal(actual, expected, `first user should be ${expected}`)
  })

  // it('should have no users when initialized', async () => {
  //   const instance = await DataStorage.deployed()
  //   const userCounts = await instance.getUserCount()
  //
  //   const actual = userCounts.toNumber()
  //   const expected = 0
  //
  //   assert.equal(actual, expected, `user count was not ${expected}`)
  // })

  // it('should returns a failure when there are no users', async () => {
  //   const instance = await DataStorage.deployed()
  //
  //   await instance.getUserAtIndex()
  //
  // })
})

////////////////////

// contract('MetaCoin', function(accounts) {
//   it("should put 10000 MetaCoin in the first account", function() {
//     return MetaCoin.deployed().then(function(instance) {
//       return instance.getBalance.call(accounts[0]);
//     }).then(function(balance) {
//       assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
//     });
//   });
//   it("should call a function that depends on a linked library", function() {
//     var meta;
//     var metaCoinBalance;
//     var metaCoinEthBalance;
//
//     return MetaCoin.deployed().then(function(instance) {
//       meta = instance;
//       return meta.getBalance.call(accounts[0]);
//     }).then(function(outCoinBalance) {
//       metaCoinBalance = outCoinBalance.toNumber();
//       return meta.getBalanceInEth.call(accounts[0]);
//     }).then(function(outCoinBalanceEth) {
//       metaCoinEthBalance = outCoinBalanceEth.toNumber();
//     }).then(function() {
//       assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
//     });
//   });
//   it("should send coin correctly", function() {
//     var meta;
//
//     // Get initial balances of first and second account.
//     var account_one = accounts[0];
//     var account_two = accounts[1];
//
//     var account_one_starting_balance;
//     var account_two_starting_balance;
//     var account_one_ending_balance;
//     var account_two_ending_balance;
//
//     var amount = 10;
//
//     return MetaCoin.deployed().then(function(instance) {
//       meta = instance;
//       return meta.getBalance.call(account_one);
//     }).then(function(balance) {
//       account_one_starting_balance = balance.toNumber();
//       return meta.getBalance.call(account_two);
//     }).then(function(balance) {
//       account_two_starting_balance = balance.toNumber();
//       return meta.sendCoin(account_two, amount, {from: account_one});
//     }).then(function() {
//       return meta.getBalance.call(account_one);
//     }).then(function(balance) {
//       account_one_ending_balance = balance.toNumber();
//       return meta.getBalance.call(account_two);
//     }).then(function(balance) {
//       account_two_ending_balance = balance.toNumber();
//
//       assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
//       assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
//     });
//   });
// });
