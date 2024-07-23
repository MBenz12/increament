import { Program } from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';
import { Increament } from 'idl/increament';

export const getIncreaseInstruction = async (
  program: Program<Increament>,
  state: PublicKey,
) => {


  return await program.methods
    .increase()
    .accounts({
      state,
    })
    .instruction();
}
