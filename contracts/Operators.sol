// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

// Basic Math
// Homework: try implementing some math inside function calls
contract Operators1 {
    function add(uint a, uint b) external pure returns (uint) {
        return a + b;
    }

    function sub(uint a, uint b) external pure returns (uint) {
        return a - b;
    }

    function mul(uint a, uint b) external pure returns (uint) {
        return a * b;
    }

    function div(uint a, uint b) external pure returns (uint) {
        return a / b;
    }

    function exp(uint a, uint b) external pure returns (uint) {
        return a ** b;
    }

    function mod(uint a, uint b) external pure returns (uint) {
        return a % b;
    }

    function increment(uint a) external pure returns (uint) {
        a++;
        return a;
    }

    function decrement(uint a) external pure returns (uint) {
        a--;
        return a;
    }

    function mathExample() external pure returns (uint) {
        uint a;
        a = a + 1; // 1
        a++; // 2
        a = a * 2; // 4
        a = a ** 2; // 16
        a = a / 2; // 8
        a = a - 1; // 7
        a--; // 6
        return a;
    }
}

contract callOperatorFxn {
    Operators1 operators1 = new Operators1();

    constructor(Operators1 _operators1) {
        operators1 = _operators1;
    }

    function getSum() public view returns (uint) {
        return operators1.add(1, 1);
    }

    function getSub() public view returns (uint) {
        return operators1.sub(1, 1);
    }

    function getMul() public view returns (uint) {
        return operators1.mul(5, 5);
    }

    function getDiv() public view returns (uint) {
        return operators1.div(25, 5);
    }

    function getExp() public view returns (uint) {
        return operators1.exp(2, 8);
    }
}

// Comparison
// Note: many types can be compared besides numbers
// This simply shows the operators
// Homework: try comparing more types, e.g., checking addresses, strings, etc...
contract Operators2 {
    function eq(uint a, uint b) external pure returns (bool) {
        return a == b;
    }

    function notEq(uint a, uint b) external pure returns (bool) {
        return a != b;
    }

    function gt(uint a, uint b) external pure returns (bool) {
        return a > b;
    }

    function lt(uint a, uint b) external pure returns (bool) {
        return a < b;
    }

    function gtOrEq(uint a, uint b) external pure returns (bool) {
        return a >= b;
    }

    function ltOrEq(uint a, uint b) external pure returns (bool) {
        return a <= b;
    }

    // Example of non-integer comparison
    function checkAddress() external pure returns (bool) {
        address address1 = 0x1aD91ee08f21bE3dE0BA2ba6918E714dA6B45836;
        address address2 = 0xe5c430b2Dd2150a20f25C7fEde9981f767A48A3c;
        return (address1 == address2);
    }
}

contract HomeworkComparisonOperators {
    function eqString(
        string memory a,
        string memory b
    ) external pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }

    function eqAddress(address a, address b) external pure returns (bool) {
        return a == b;
    }

    function notEq(address a, address b) external pure returns (bool) {
        return a != b;
    }
}

// Logical Operators
// Homework: try implementing more of these
// E.g. try checking expression equality like 1 + 1 == 2
contract Operators3 {
    function and(bool a, bool b) external pure returns (bool) {
        return a && b;
    }

    function or(bool a, bool b) external pure returns (bool) {
        return a || b;
    }

    function not(bool a) external pure returns (bool) {
        return !a;
    }

    function comparisonExample() external pure returns (bool) {
        return (1 + 1 == 2) && (2 + 2 == 4);
    }
}

contract HwLogicalOperators {
    function and(uint a, uint b) external pure returns (bool) {
        return (a + a == 0) && (b - b == 0);
    }

    function or(string memory a, string memory b) external pure returns (bool) {
        return
            keccak256(abi.encodePacked(a)) ==
            keccak256(abi.encodePacked('test')) ||
            keccak256(abi.encodePacked(b)) == keccak256(abi.encodePacked('hw'));
    }
}
