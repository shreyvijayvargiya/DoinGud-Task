pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

// make sure you have installed openzeppelin package within the project
import "../node_modules/@openzeppelin/contracts/token/ERC1155/ERC1155.sol";


contract ERC1155Token {

    uint256 public constant GOLD = 1;
    uint256 public constant SILVER = 2;

    constructor() ERC1155("Batch Collection"){
        // minting tokens initially on the deployment of the contract
        _mint(msg.sender, GOLD, 100, "");
        _mint(msg.sender, SILVER, 200, "");
    }
}
