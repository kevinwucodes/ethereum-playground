pragma solidity ^0.4.2;

contract Adder {
  uint result;

  event ResultEvent (
    uint result,
    string name
  );

  function addNumbers(int a, int b) public pure returns (int) {
    return a + b;

    /*events no longer make this pure, but rather "view"*/
    /*ResultEvent(result, 'hello there');*/
  }

  function getResult() constant public returns (uint) {
    return result;
  }
}
