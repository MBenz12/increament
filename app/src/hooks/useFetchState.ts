import { useState, useEffect, useCallback } from 'react';
import { StateData } from 'types';
import useProgram from './useProgram';

const useFetchState = (reload: {}) => {
  const [state, setState] = useState<StateData>();
  const program = useProgram();

  const fetchState = useCallback(async () => {
    if (!program) return;
    try {
      const states = await program.account.state.all();
      setState(states[0].account as StateData);
    } catch (error) {
      console.log(error);
    }
  }, [program]);

  useEffect(() => {
    fetchState();
  }, [program, fetchState, reload]);

  return { state };
};

export default useFetchState;