import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram } from "@solana/web3.js";
import { createProvider, createTransaction } from "./anchorClient";
import { GoalLotteryType } from "./types/goal_lottery";
import GOAL_LOTTERY_IDL from "./idl/goal_lottery.json";

export class OcraDex {
  private provider: anchor.AnchorProvider;
  private program: Program<GoalLotteryType>;

  constructor(wallet: AnchorWallet, connection: Connection) {
    this.provider = createProvider(wallet, connection);
    this.program = new Program<GoalLotteryType>(
      JSON.parse(JSON.stringify(GOAL_LOTTERY_IDL)),
      this.provider
    );
  }

  async getTokenBalance() {
    const balance = 10//await 
    return balance;
  }

}
