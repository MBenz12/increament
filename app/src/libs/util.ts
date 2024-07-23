import { Program } from "@project-serum/anchor";
import { Increament } from "idl/increament";

export async function getStateAddress(program: Program<Increament>) {
    const states = await program.account.state.all();
    const state = states[0].publicKey;
    return state;
}