import { Program } from '@project-serum/anchor';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { Transaction } from '@solana/web3.js';
import { Increament } from 'idl/increament';
import { getIncreaseInstruction } from './instructions';
import { getStateAddress } from './util';

export async function increase(
  wallet: WalletContextState,
  program: Program<Increament>,  
) {
  if (!wallet.publicKey) return;
  try {
    const transaction = new Transaction();
    transaction.add(
      await getIncreaseInstruction(program, await getStateAddress(program))
    );

    const txSignature = await wallet.sendTransaction(transaction, program.provider.connection, { skipPreflight: true });
    await program.provider.connection.confirmTransaction(txSignature, "confirmed");
    return txSignature;
  } catch (error) {
    console.log(error);
    return;
  }
}
