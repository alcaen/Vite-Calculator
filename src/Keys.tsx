import type { ActionType } from './App';
type Props = {
  readKey: React.Dispatch<ActionType>;
};

const keys = [
  'C',
  'CA',
  '%',
  '+',
  1,
  2,
  3,
  '-',
  4,
  5,
  6,
  'x',
  7,
  8,
  9,
  '/',
  0,
  '.',
  '=',
];

const Keys = ({ readKey }: Props) => {
  return (
    <div className='w-full h-full flex flex-row items-center justify-center space-y-2 flex-wrap'>
      {/* Numbers */}
      <div className='w-full h-full flex flex-row flex-wrap items-center justify-around'>
        {keys.map((key) => (
          <div
            className={'h-14 md:h-12 lg:h-32 bg-slate-600 mx-1 flex items-center justify-around hover:opacity-70 active:opacity-30 duration-200 cursor-pointer rounded-lg shadow-white/40 active:shadow-none shadow-md '.concat(
              key == '='
                ? 'w-[7.8rem] md:w-[10.65rem] lg:w-[30rem]'
                : 'w-14 md:w-20 lg:w-56'
            )}
            onClick={() => {
              readKey({
                type:
                  key == '='
                    ? 'solve'
                    : key == 'C'
                    ? 'cleanOne'
                    : key == 'CA'
                    ? 'cleanAll'
                    : 'read_key',
                value: key == 'x' ? '*' : String(key),
              });
            }}
          >
            <p className='text-white/80 font-semibold text-2xl lg:text-4xl'>
              {key}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keys;
