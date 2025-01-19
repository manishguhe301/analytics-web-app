'use client';
import { COMPANIES_HERO_SECTION_IMAGES } from '@/utils/constants';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className='mt-20 flex flex-col items-center max-sm:mt-16'>
      <div className='flex items-center gap-2 border border-[#E63F3A4D] px-2 py-[6px] rounded-3xl bg-[#E63F3A] bg-opacity-5 max-sm:border-[#E9D7FE] max-sm:bg-[#F9F5FF]'>
        <p className='px-[10px] py-[3px] border border-[#E63F3A4D] text-[#E63F3A] bg-white rounded-2xl text-sm font-medium max-sm:border-[#D6BBFB] max-sm:text-xs'>
          New feature
        </p>
        <p className='flex items-center text-[#E63F3A] text-sm font-medium max-sm:text-xs'>
          Check out the team dashboard
          <Image
            src={
              !isMobile
                ? '/assets/arrow-right.svg'
                : '/assets/arrow-right-mobile.svg'
            }
            alt='arrow-right'
            width={16}
            height={16}
            className='ml-1'
          />
        </p>
      </div>
      <div className='flex flex-col items-center mt-4 '>
        <h1 className='font-semibold text-5xl leading-[64px] text-[#101828] max-sm:text-4xl text-center max-sm:leading-10 max-sm:px-8'>
          Beautiful analytics to grow smarter
        </h1>
        <div className=' mt-6 text-center flex justify-center max-sm:mt-4'>
          <p className='w-[60%] font-normal text-lg text-[#475467] leading-7 max-sm:w-[90%] max-sm:px-6'>
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className='mt-12 flex gap-3 items-center mb-16 max-sm:mt-8 max-sm:w-full max-sm:px-4 max-sm:flex-col-reverse'>
          <button className='border border-[#D0D5DD] px-6 py-3 rounded-full flex items-center gap-2 text-[#344054] font-semibold leading-6 text-base hover:bg-[#fafafb] transition ease-in-out duration-300 max-sm:w-full justify-center'>
            <Image src='/assets/play.svg' alt='play' width={20} height={20} />
            Demo
          </button>
          <button className='bg-[#E63F3A] px-6 py-3 rounded-full border border-[#E63F3A] text-white font-semibold leading-6 text-base hover:bg-[#6941c6] hover:border-[#6941c6] transition ease-in-out duration-300 max-sm:w-full'>
            Sign up
          </button>
        </div>
        <div className='w-full flex justify-center items-center bg-black pt-[10px] px-[10px] rounded-t-3xl mb-24 max-lg:w-[90%] max-sm:rounded-xl max-sm:p-[6px]'>
          <Image
            src='/assets/hero.svg'
            alt='hero-image'
            width={10}
            height={10}
            className='h-full w-full object-cover rounded-t-[28px] max-sm:rounded-lg max-sm:h-[194px]'
          />
        </div>
        <div className='flex flex-col items-center gap-8'>
          <p className='text-[#475467] text-base leading-6 font-medium text-center'>
            Join 4,000+ companies already growing
          </p>
          <div className='flex items-center justify-center gap-8 max-lg:grid grid-cols-3 max-sm:grid-cols-2 max-sm:gap-8'>
            {COMPANIES_HERO_SECTION_IMAGES.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`company-${index}`}
                width={10}
                height={10}
                className='w-full h-12 max-sm:h-9'
              />
            ))}
          </div>
        </div>
        <hr className='my-24 w-full border-[#EAECF0] max-sm:w-[90%] max-sm:my-16' />
      </div>
    </div>
  );
};

export default HeroSection;
