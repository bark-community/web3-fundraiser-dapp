// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Fundraiser.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FundraiserFactory is Ownable {
    Fundraiser[] public fundraisers;

    event FundraiserCreated(address indexed fundraiserAddress, address owner, string name, uint256 goalAmount);

    constructor(address _initialOwner) Ownable(_initialOwner) {}

    function createFundraiser(
        string memory _name,
        string memory _image,
        string memory _description,
        uint256 _goalAmount,
        address payable _beneficiary,
        uint256 _fundraisingDuration
    ) external {
        Fundraiser newFundraiser = new Fundraiser(
            _name,
            _image,
            _description,
            _goalAmount,
            _beneficiary,
            msg.sender,
            _fundraisingDuration
        );

        fundraisers.push(newFundraiser);

        emit FundraiserCreated(address(newFundraiser), msg.sender, _name, _goalAmount);
    }

    function getFundraisersCount() external view returns (uint256) {
        return fundraisers.length;
    }
}