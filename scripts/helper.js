import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

// getting our private key from .env file that we created earlier
const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing")
  process.exit(1)
}

// checking if the .env file contains the private key or not
// also note it is an export variable
export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Wallet private key. NEVER CHECK THE KEY IN. ALWAYS USE ENVIRONMENT VARIABLES.
    process.env.WALLET_PRIVATE_KEY,
    // We use Polygon Mumbai network
    ethers.getDefaultProvider("https://winter-icy-sun.matic-testnet.quiknode.pro/f36aa318f8f806e4e15a58ab4a1b6cb9f9e9d9b9/")
  ),
);

const appAddress = '0x8E450223365c1e127268bb91474A279b0B74d7c2'; // your project address from thirdweb

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}

