# BARK | Web3 Fundraising Platform

## Overview
This project is a decentralized fundraising platform built on the Polygon network, allowing users to raise funds for social work using cryptocurrency. Users can create fundraising campaigns, donate MATIC tokens, generate receipts, and withdraw funds securely.

## Features
- **Campaign Creation**: Create and manage fundraising campaigns with a title, description, target amount, and duration.
- **Donations**: Donate, USDC, SOL, BARK or MATIC tokens to active campaigns, with all transactions recorded on the blockchain.
- **Receipt Generation**: Automatically generate and access receipts for each donation.
- **Fund Withdrawal**: Campaign creators can withdraw funds once the campaign ends or the target amount is reached.
- **User Authentication**: Secure login and authentication using MetaMask or similar Ethereum-compatible wallets.

### Network
Contract is deployed on Polygon mumbai network

- **CA**: 

## Technical Stack
- **Blockchain Network**: Polygon (formerly Matic Network)
- **Smart Contracts**: Solidity
- **Frontend**: React.js, Web3.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for non-critical data)
- **Wallet Integration**: MetaMask

## Setup and Installation

### Prerequisites
- Node.js
- MetaMask wallet
- MongoDB (optional for storing non-critical data)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/bark-community/web3-fundraising-platform.git
    cd wb3-fundraising-platform
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Setup

1. **Install Dependencies**:
    ```bash
    npm install
    ```

2. **Configure Environment Variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    REACT_APP_POLYGON_RPC_URL=<Polygon RPC URL>
    REACT_APP_CONTRACT_ADDRESS=<Deployed Smart Contract Address>
    REACT_APP_MONGODB_URI=<MongoDB Connection String>
    MNEMONIC_KEY=<Your Wallet Mnemonic>
    INFURA_API_KEY=<Your Infura API Key>
    INFURA_IPFS_ID=<Your Infura IPFS ID>
    INFURA_IPFS_SECRET=<Your Infura IPFS Secret>
    ```

3. **Compile Contracts**:
    ```bash
    npx hardhat compile
    ```

4. **Deploy Contracts**:
    Make sure you have a Polygon testnet/mainnet account with sufficient MATIC for deployment.
    ```bash
    npx hardhat run scripts/deploy_contracts.js --network polygon
    ```

5. **Run the Application**:
    ```bash
    npm start
    ```
    
    The application will be available at `http://localhost:3000`.

## Usage

### Creating a Campaign
1. Connect your MetaMask wallet.
2. Navigate to the "Create Campaign" section.
3. Fill in the campaign details and submit.
4. Your campaign will be recorded on the blockchain.

### Donating to a Campaign
1. Browse active campaigns.
2. Select a campaign and enter the amount to donate.
3. Confirm the transaction in MetaMask.
4. A receipt will be generated and available for viewing.

### Withdrawing Funds
1. Campaign creators can request a withdrawal once the campaign ends or target is reached.
2. Confirm the withdrawal transaction in MetaMask.
3. Funds will be transferred to the campaign creator's wallet.

## Contributing
We welcome contributions to enhance the platform. Please fork the repository and submit pull requests.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com).

## Acknowledgements
- [Polygon](https://polygon.technology/)
- [MetaMask](https://metamask.io/)
- [React](https://reactjs.org/)
- [Web3.js](https://web3js.readthedocs.io/)
- [Hardhat](https://hardhat.org/)
