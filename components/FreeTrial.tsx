import React from 'react';

const FreeTrial = () => {
  return (
    <div className='h-[374px] w-full bg-[#F9FAFB] flex flex-col items-center justify-center mb-16 max-sm:mb-12'>
      <h2 className='text-4xl font-semibold text-[#101828] leading-10 pb-4 max-sm:text-[30px]'>
        Start your free trial
      </h2>
      <p className='font-normal text-xl leading-7 text-[#475467] pb-10 max-sm:text-lg text-center max-sm:px-10'>
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div
        className=' flex gap-3 items-center max-sm:flex-col-reverse
      max-sm:w-full max-sm:px-4'
      >
        <button className='border border-[#D0D5DD] px-5 py-3 rounded-lg flex items-center gap-2 text-[#344054] font-semibold leading-6 text-base hover:bg-[#fafafb] transition ease-in-out duration-300 max-sm:w-full justify-center'>
          Learn more
        </button>
        <button className='bg-[#E63F3A] px-5 py-3 rounded-lg border border-[#E63F3A] text-white font-semibold leading-6 text-base hover:bg-[#6941c6] hover:border-[#6941c6] transition ease-in-out duration-300 max-sm:w-full'>
          Get started
        </button>
      </div>
    </div>
  );
};

export default FreeTrial;
