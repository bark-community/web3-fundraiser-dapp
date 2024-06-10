// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/access/Ownable.sol";

// Import the Fundraiser contract
import "./Fundraiser.sol";

contract FundraiserFactory is Ownable {
    // Array to store deployed Fundraiser contracts
    Fundraiser[] public fundraisers;

    // Event emitted when a new fundraiser is created
    event FundraiserCreated(address indexed fundraiserAddress, address owner, string name, uint256 goalAmount);

    // Constructor to initialize the Ownable contract with the specified initial owner
    constructor(address initialOwner) Ownable(initialOwner) {}

    // Function to create a new fundraiser
    function createFundraiser(
        string memory _name,
        string memory _image,
        string memory _description,
        uint256 _goalAmount,
        address payable _beneficiary
    ) external {
        // Deploy a new Fundraiser contract
        Fundraiser newFundraiser = new Fundraiser(
            _name,
            _image,
            _description,
            _goalAmount,
            _beneficiary,
            msg.sender // Pass the caller's address as the initial owner
        );

        // Add the new Fundraiser contract to the array
        fundraisers.push(newFundraiser);

        // Emit an event to signal the creation of a new fundraiser
        emit FundraiserCreated(address(newFundraiser), msg.sender, _name, _goalAmount);
    }

    // Function to get the number of deployed fundraisers
    function getFundraisersCount() external view returns (uint256) {
        return fundraisers.length;
    }
}
