// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract PehpiToken is ERC20 {
    constructor(string memory _name, string memory _symbol, uint memory _totalAmount) ERC20(_name, _symbol) {
        // We are minting _totalAmount full tokens
        _mint(msg.sender, _totalAmount * 10 ** 18);
    }
}