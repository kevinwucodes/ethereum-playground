const BasicMath = artifacts.require('./BasicMath.sol')
const DataStorage = artifacts.require('./DataStorage.sol')

module.exports = function(deployer) {
  deployer.deploy(BasicMath)
  deployer.deploy(DataStorage)
}
