pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";

import "../contracts/BasicMath.sol";

contract TestBasicMath {

  function test_simple_add() public {
    int a = 3;
    int b = 5;
    int actual = BasicMath.addNumbers(a,b);
    int expected = 8;

    Assert.equal(actual, expected, "3+5 = 8");
  }

  function test_simple_add_fail() public {
    int a = 10;
    int b = 20;
    int actual = BasicMath.addNumbers(a,b);
    int expectedToNotEqual = 5;

    Assert.notEqual(actual, expectedToNotEqual, "10+20 != 5");
  }

  function test_add_negatives() public {
    int a = -6;
    int b = -10;
    int actual = BasicMath.addNumbers(a,b);
    int expected = -16;

    Assert.equal(actual, expected, "-6 + -10 = -16");
  }

  function test_this_is_useless_rational() public {
    //can't do {} due to bug in truffle, solidity is fine though?
    /*rational num = rational({scale: 4, precision: 34});*/

    //good
    BasicMath.Rational memory n1 = BasicMath.Rational(int8(-4), int8(33));
    /*BasicMath.Rational memory n2 = BasicMath.Rational(int(6), int(222));*/


    /*BasicMath.Rational memory a = BasicMath.asdf(n1, n2);*/
    /*int bb = a.scale;*/

    Assert.equal(bytes32(n1.scale), -4, "this is a useless test");

    /*Assert.equal(a.scale, int(-4), "wtf");*/

    /*Asser.equal(num, Rational({scale:5, precision:33}), "wtf");*/

    /*uint a = .950000000000005647 ether;
    uint b = .000000001 ether;
    uint c = .00000000096 ether;*/

    /*Assert.equal(BasicMath.wmul(a, b), c, "did this work?");*/
    /*Assert.equal(a*b, c, "how the heck?");*/
    /*Assert.equal(BasicMath.mul(a,b), c, "what?");*/

    //good
    /*uint z = add(
      mul(a, b),
      (WAD / 2)
    ) / WAD;*/

    //good
    /*Assert.equal(z, c, "huh?");*/


  }
}
