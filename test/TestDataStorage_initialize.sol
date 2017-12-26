pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DataStorage.sol";

contract TestDataStorage_initialize {

  function test_initialize() public {
    DataStorage ds = new DataStorage();

    uint actual = ds.getUserCount();
    uint expected = 0;

    Assert.equal(
      actual,
      expected,
      "user count should be zero when nothing has been inserted"
    );
  }
  
}
