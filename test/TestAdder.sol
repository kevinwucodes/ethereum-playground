pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adder.sol";

contract TestAdder {

  function test_simple_add() public {
    int a = 3;
    int b = 5;
    int actual = Adder.addNumbers(a,b);
    int expected = 8;

    Assert.equal(actual, expected, "3+5 = 8");
  }

  function test_simple_add_fail() public {
    int a = 10;
    int b = 20;
    int actual = Adder.addNumbers(a,b);
    int expectedToNotEqual = 5;

    Assert.notEqual(actual, expectedToNotEqual, "10+20 != 5");
  }

  function test_add_negatives() public {
    int a = -6;
    int b = -10;
    int actual = Adder.addNumbers(a,b);
    int expected = -16;

    Assert.equal(actual, expected, "-6 + -10 = -16");
  }
}
