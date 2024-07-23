use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("BB9qN1KHapPXcprdrmnquxPpoqSuqap1haUyt8w7qTDR");

#[program]
mod increament {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        ctx.accounts.state.num = 0;
        msg!("Initialized num to: {}!", 0); // Message will show up in the tx logs
        Ok(())
    }

    pub fn increase(ctx: Context<Increase>) -> Result<()> {
        let state = &mut ctx.accounts.state;

        state.num = state.num.checked_add(1).unwrap();
        msg!("Increased data to: {}!", state.num);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 4 + 8)]
    pub state: Account<'info, State>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increase<'info> {
    #[account(mut)]
    pub state: Account<'info, State>,
}

#[account]
pub struct State {
    num: u32,
}
