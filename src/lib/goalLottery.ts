import * as anchor from "@coral-xyz/anchor";
import { Program, BN } from "@coral-xyz/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { Connection, PublicKey, SystemProgram } from "@solana/web3.js";
import { createProvider, createTransaction } from "./anchorClient";
import { GoalLotteryType } from "./types/goal_lottery";
import GOAL_LOTTERY_IDL from "./idl/goal_lottery.json";

export class GoalLottery {
  private provider: anchor.AnchorProvider;
  private program: Program<GoalLotteryType>;
  private initializePDA;

  constructor(wallet: AnchorWallet, connection: Connection) {
    this.provider = createProvider(wallet, connection);
    this.program = new Program<GoalLotteryType>(
      JSON.parse(JSON.stringify(GOAL_LOTTERY_IDL)),
      this.provider
    );
    const [initializePDA, _] = PublicKey.findProgramAddressSync(
      [Buffer.from("GOAL_LOTTERY")],
      this.program.programId
    );
    this.initializePDA = initializePDA;
  }

  async getAccountBalance() {
    try {
      return await this.provider.connection.getBalance(this.initializePDA);
    } catch (error) {
      console.log(error);
    }
  }

  async getLotteryTickets() {
    try {
      let lotteryState = await this.getLotteryState();
      if (!lotteryState) throw new Error("lottery not initialized");
      let ticketCount = lotteryState.ticketCount.toNumber();

      const [lotteryTicketPDA, _] = PublicKey.findProgramAddressSync(
        [
          Buffer.from("GOAL_LOTTERY_TICKET"),
          new anchor.BN(ticketCount).toArrayLike(Buffer, "le", 8),
        ],
        this.program.programId
      );

      return await this.program.account.lotteryTicket.fetch(lotteryTicketPDA);
    } catch (error) {
      console.log(error);
    }
  }

  async getLotteryState() {
    try {
      return await this.program.account.goalLotteryState.fetch(
        this.initializePDA
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getLotteryWinner() {
    try {
      const transaction = createTransaction();
      transaction.add(
        await this.program.methods
          .fetchLotteryWinner(SystemProgram.programId)
          .accounts({
            lotteryState: this.initializePDA,
            user: this.provider.publicKey,
            randomnessAccountData: SystemProgram.programId,
          })
          .instruction()
      );

      const result = await this.provider.sendAndConfirm(transaction);

      console.log({ result });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async initializeLotteryState() {
    try {
      const transaction = createTransaction();

      transaction.add(
        await this.program.methods
          .initializeLottery(new BN(10))
          .accounts({
            lotteryState: this.initializePDA,
            signer: this.provider.publicKey,
            systemProgram: SystemProgram.programId,
          })
          .instruction()
      );

      const result = await this.provider.sendAndConfirm(transaction);
      //custom error code 0x0 ==> lottery already initialized
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
