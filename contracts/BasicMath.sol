pragma solidity ^0.4.2;

library BasicMath {

  event ResultEvent (
    uint result,
    string name
  );

  function addNumbers(int a, int b) public pure returns (int) {
    return a + b;

    /*events no longer make this pure, but rather "view"*/
    /*ResultEvent(result, 'hello there');*/
  }
}
