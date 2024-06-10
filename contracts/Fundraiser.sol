// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Fundraiser is Ownable, ReentrancyGuard {
    struct Donation {
        uint256 value;
        uint256 date;
    }

    mapping(address => Donation[]) private donations;

    event DonationReceived(address indexed donor, uint256 value);
    event Withdrawal(address indexed beneficiary, uint256 amount);
    event BeneficiaryChanged(address indexed oldBeneficiary, address indexed newBeneficiary);
    event GoalReached(uint256 amountRaised);

    string public name;
    string public image;
    string public description;
    address payable public beneficiary;
    uint256 public goalAmount;
    uint256 public totalDonations;
    uint256 public donationsCount;
    uint256 public fundraisingDeadline;

    modifier goalNotReached() {
        require(totalDonations < goalAmount, "Goal already reached");
        _;
    }

    constructor(
        string memory _name,
        string memory _image,
        string memory _description,
        uint256 _goalAmount,
        address payable _beneficiary,
        address _initialOwner,
        uint256 _fundraisingDuration
    ) Ownable(_initialOwner) {
        name = _name;
        image = _image;
        description = _description;
        goalAmount = _goalAmount;
        beneficiary = _beneficiary;
        fundraisingDeadline = block.timestamp + _fundraisingDuration;
    }

    function setBeneficiary(address payable _beneficiary) external onlyOwner {
        address oldBeneficiary = beneficiary;
        beneficiary = _beneficiary;
        emit BeneficiaryChanged(oldBeneficiary, _beneficiary);
    }

    function donate() external payable nonReentrant goalNotReached {
        require(msg.value > 0, "Donation amount must be greater than zero");
        require(block.timestamp < fundraisingDeadline, "Fundraising deadline has passed");
        donations[msg.sender].push(Donation({
            value: msg.value,
            date: block.timestamp
        }));
        totalDonations += msg.value;
        donationsCount++;

        emit DonationReceived(msg.sender, msg.value);

        if (totalDonations >= goalAmount) {
            emit GoalReached(totalDonations);
        }
    }

    function myDonationsCount() external view returns (uint256) {
        return donations[msg.sender].length;
    }

    function myDonations() external view returns (uint256[] memory values, uint256[] memory dates) {
        uint256 count = donations[msg.sender].length;
        values = new uint256[](count);
        dates = new uint256[](count);

        for (uint256 i = 0; i < count; i++) {
            Donation storage donation = donations[msg.sender][i];
            values[i] = donation.value;
            dates[i] = donation.date;
        }

        return (values, dates);
    }

    function withdraw() external onlyOwner nonReentrant {
        uint256 balance = address(this).balance;
        require(balance > 0, "Insufficient balance to withdraw");
        (bool success, ) = beneficiary.call{value: balance}("");
        require(success, "Withdrawal failed");

        emit Withdrawal(beneficiary, balance);
    }

    receive() external payable {}
}
