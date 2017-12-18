const Adder = artifacts.require('./Adder.sol')

module.exports = function(deployer) {
  deployer.deploy(Adder)
}
