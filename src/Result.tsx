type Props = {
  result: string;
};

const Result = ({ result }: Props) => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-2 p-2'>
      <div className='flex-1 w-full bg-gray-300 flex items-center justify-center rounded-lg max-w-[325px] max-h-[105px] md:max-h-[256px] lg:max-h-[736px]'>
        <p
          className='text-3xl font-semibold text-black/80 w-full h-full overflow-x-hidden break-all overflow-y-scroll text-center p-2'
          id='style-3'
        >
          {result ? result : 0}
        </p>
      </div>
    </div>
  );
};

export default Result;
