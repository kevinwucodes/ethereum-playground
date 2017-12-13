pragma solidity ^0.4.0;

contract Adder {
  uint result;

  function addNumbers(uint a, uint b) public {
    result = a + b;
  }

  function getResult() constant public returns (uint) {
    return result;
  }
}
