pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adder.sol";

contract TestAdder {

  function test_3plus5() public {
    Adder adder = Adder(DeployedAddresses.Adder());

    uint a = 3;
    uint b = 5;
    uint actual = adder.addNumbers(a,b);
    uint expected = 8;

    Assert.equal(actual, expected, "3+5 = 8");
  }
}
