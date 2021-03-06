pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DataStorage.sol";

contract TestDataStorage_one_user {

  address acct1 = 0x627306090abaB3A6e1400e9345bC60c78a8BEf57;
  address acct2 = 0xf17f52151EbEF6C7334FAD080c5704D77216b732;
  address acct3 = 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef;

  DataStorage ds;
  uint userIndex;

  function beforeEach() public {
    /*DataStorage ds = DataStorage(DeployedAddresses.DataStorage());*/
    ds = new DataStorage();
    userIndex = ds.insert(acct1, 'kevin');
  }

  //*****************
  //Tests
  //*****************

  function test_get_user_counts() public {

    uint actual = ds.getUserCount();
    uint expected = 1;

    Assert.equal(
      actual,
      expected,
      "user count should be one when we insert one user"
    );
  }

  function test_get_user_index() public {

    uint actual = userIndex;
    uint expected = 0;

    Assert.equal(
      actual,
      expected,
      "inserted user should have index of 0"
    );

  }

  function test_get_user_at_index() public {
    address actual = ds.getUserAtIndex(0);
    address expected = 0x627306090abaB3A6e1400e9345bC60c78a8BEf57;

    Assert.equal(
      actual,
      expected,
      "inserted user should have address of 0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    );

  }



}
