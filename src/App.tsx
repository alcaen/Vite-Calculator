import { useReducer } from 'react';
import Keys from './Keys';
import Result from './Result';

type StateType = {
  operation: string;
};
export type ActionType = {
  type: 'read_key' | 'solve' | 'cleanOne' | 'cleanAll';
  value: string;
};

const symb = ['+', '-', '*', '/', '%'];

const resolve = (op: string) => {
  try {
    return String(eval(op));
  } catch (e) {
    return 'FAIL';
  }
};

const reducer = (state: StateType, action: ActionType) => {
  if (action.type === 'read_key') {
    return {
      operation:
        state.operation.includes('.') && action.value == '.'
          ? state.operation
          : state.operation.slice(-1) == action.value &&
            symb.includes(action.value)
          ? state.operation
          : state.operation == 'FAIL'
          ? action.value
          : state.operation.concat(action.value),
    };
  }
  if (action.type === 'solve') {
    return {
      operation: resolve(state.operation),
    };
  }
  if (action.type === 'cleanOne') {
    return {
      operation: state.operation.slice(0, -1),
    };
  }
  if (action.type === 'cleanAll') {
    return {
      operation: '',
    };
  }
  throw Error('Unknown action.');
};

function App() {
  const [state, dispatch] = useReducer(reducer, { operation: '' });
  return (
    <>
      <div className='flex items-center justify-center min-h-screen w-full'>
        <div className='bg-slate-800 sm:h-[20rem] sm:w-[35rem] h-[35rem] w-[20rem] lg:h-[50rem] lg:w-[90rem] flex sm:flex-row flex-col justify-between sm:space-x-7 sm:space-y-0 space-y-7 p-6 rounded-xl'>
          <div className='flex-[1] bg-black rounded-lg'>
            <Result result={String(state.operation)} />
          </div>
          <div className='flex-[3] bg-slate-900 rounded-lg'>
            <Keys readKey={dispatch} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
