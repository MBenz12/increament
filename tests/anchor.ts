import * as anchor from "@coral-xyz/anchor";
import assert from "assert";
import * as web3 from "@solana/web3.js";
import type { Increament } from "../target/types/increament";

describe("Test", () => {
  // Configure the client to use the local cluster
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Increament as anchor.Program<Increament>;
  
  it("initialize", async () => {
    // Generate keypair for the new account
    const stateKp = new web3.Keypair();

    // Send transaction
    let txHash = await program.methods
      .initialize()
      .accounts({
        state: stateKp.publicKey,
        signer: program.provider.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([stateKp])
      .rpc();
    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

    // Confirm transaction
    await program.provider.connection.confirmTransaction(txHash);

    // Fetch the created account
    let state = await program.account.state.fetch(stateKp.publicKey);

    console.log("On-chain data is:", state.num.toString());

    // Check whether the data on-chain is equal to 0
    assert(state.num === 0);

    txHash = await program.methods
      .increase()
      .accounts({
        state: stateKp.publicKey,
      })
      .rpc();

    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);
    await program.provider.connection.confirmTransaction(txHash);

    state = await program.account.state.fetch(stateKp.publicKey);
    console.log("On-chain data is:", state.num.toString());

    assert(state.num === 1);
  });
});
