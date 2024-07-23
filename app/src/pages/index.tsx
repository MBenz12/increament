/* eslint-disable react-hooks/exhaustive-deps */
import { useWallet } from '@solana/wallet-adapter-react';
import useProgram from 'hooks/useProgram';
import { useState } from 'react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useFetchState from 'hooks/useFetchState';
import { increase } from 'libs/methods';
import { toast } from 'react-toastify';

export default function Home() {
  const wallet = useWallet();
  const program = useProgram();
  const [reload, setReload] = useState({});
  const { state } = useFetchState(reload);

  const handleIncrease = async () => {
    if (!program || !state) return;

    const txSignature = await increase(wallet, program);
    console.log(txSignature);
    setReload({});
    if (txSignature) {
      toast.success("Successfully increased!");
    } else {
      toast.error("Failed to increase!");
    }
  }


  return (
    <div className='flex flex-col gap-2'>
      <WalletMultiButton />
      {state && <>
        <div>Num: {state.num}</div>
        <div className='flex flex-col gap-2'>
          <div className="flex gap-2 items-center">
            <button onClick={handleIncrease}>Increase</button>
          </div>
        </div>
      </>}
    </div>
  )
}