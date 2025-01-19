import Image from 'next/image';
import React from 'react';

const Feedback = () => {
  return (
    <div className='bg-[#F9FAFB] w-full h-[552px] flex flex-col items-center justify-center gap-8 max-sm:h-[558px] mb-24 max-sm:mb-16'>
      <Image
        src='/assets/sisyphus.svg'
        alt='sisyphus'
        width={140}
        height={40}
        className=''
      />
      <h1 className='text-5xl font-medium leading-[60px] text-center text-[#101828] w-[80%] max-md:text-4xl max-sm:text-[30px]'>
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h1>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src='/assets/cadince.svg'
          alt='cadince'
          width={64}
          height={64}
          className='mb-4 max-md:w-14 max-md:h-14'
        />
        <p className='font-semibold text-lg leading-7 text-center text-[#101828] mb-1'>
          Candice Wu
        </p>
        <p className='font-normal text-base text-[#475467] leading-6 text-center'>
          Product Manager, Sisyphus
        </p>
      </div>
    </div>
  );
};

export default Feedback;
