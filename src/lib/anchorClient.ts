import * as anchor from "@coral-xyz/anchor";
import {
  Transaction,
  ComputeBudgetProgram,
  Connection,
  PublicKey,
} from "@solana/web3.js";
import { AnchorWallet } from "@solana/wallet-adapter-react";

export function createProvider(wallet: AnchorWallet, connection: Connection) {
  const provider = new anchor.AnchorProvider(connection, wallet, {
    commitment: "confirmed",
  });
  anchor.setProvider(provider);
  return provider;
}

export function createTransaction() {
  const transaction = new Transaction();
  transaction.add(
    ComputeBudgetProgram.setComputeUnitLimit({
      units: 200000,
    })
  );
  return transaction;
}

export async function getSWAGTokenBalance(connection: Connection) {
  try {
    const info = await connection.getTokenAccountBalance(
      new PublicKey("DMNVLQqxStwbFFgG99WRbCrzfS9FgJqfNpf36R4CCDRe"),
      "confirmed"
    );
    if (info.value.uiAmount == null) throw new Error("No balance found");
    return info.value.uiAmount;
  } catch (error) {
    console.log(error);
  }
}

/** Get All token info holded by address
 *
 * import { TOKEN_PROGRAM_ID } from "@coral-xyz/anchor/dist/cjs/utils/token";
 *
 * const tokenAccounts = await connection.getTokenAccountsByOwner(wallet.publicKey, {
 * programId: TOKEN_PROGRAM_ID,
 * })
 */
