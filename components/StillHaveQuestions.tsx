import Image from 'next/image';
import React from 'react';

const StillHaveQuestions = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-24 max-sm:mb-16'>
      <div className='w-[80%] flex flex-col items-center justify-center h-[298px] bg-[#F9FAFB] gap-8 max-md:w-[90%] max-sm:w-full'>
        <Image
          src='/assets/avatargroup.svg'
          alt='avatar'
          width={120}
          height={56}
        />
        <div className='flex flex-col items-center gap-2'>
          <p className='font-semibold text-xl text-center text-[#101828] leading-7'>
            Still have questions?
          </p>
          <p className='font-normal text-[#475467] text-lg leading-7 text-center max-sm:px-12 max-sm:text-base'>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <button className='bg-[#E63F3A] px-5 py-3 rounded-lg border border-[#E63F3A] text-white font-semibold leading-6 text-base hover:bg-[#6941c6] hover:border-[#6941c6] transition ease-in-out duration-300 '>
          Get in touch
        </button>
      </div>
      <hr className='my-24 border-[#EAECF0] max-sm:w-[90%] max-sm:my-16 w-[80%]' />
    </div>
  );
};

export default StillHaveQuestions;
