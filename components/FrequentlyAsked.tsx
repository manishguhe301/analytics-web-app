'use client';
import { FREQENTLY_ASKED_DATA } from '@/utils/constants';
import Image from 'next/image';
import React, { useState } from 'react';

const FrequentlyAsked = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className='flex flex-col items-center mb-16 max-sm:mb-12'>
      <h1 className='text-4xl  text-[#101828] font-semibold leading-10 mb-5 max-sm:text-[30px] text-center max-sm:px-4'>
        Frequently asked questions
      </h1>
      <p className='font-normal text-xl text-[#475467] leading-7 text-center mb-16 max-sm:text-lg max-sm:px-4'>
        Everything you need to know about the product and billing.
      </p>

      <div className='flex flex-col gap-8 w-[768px] max-md:w-[90%]'>
        {FREQENTLY_ASKED_DATA.map((questionData, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              className='flex flex-col gap-2 items-start transition-all duration-300 border-b border-[#EAECF0] last:border-b-0 pb-4'
              key={questionData.question}
            >
              <div
                className='w-full flex justify-between items-center cursor-pointer'
                onClick={() => handleToggle(index)}
              >
                <p className='text-lg font-medium leading-7 text-[#101828]'>
                  {questionData.question}
                </p>
                {isExpanded ? (
                  <Image
                    src='/assets/contract.svg'
                    alt='contract'
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src='/assets/expand.svg'
                    alt='expand'
                    width={24}
                    height={24}
                  />
                )}
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden w-[94%] ${
                  isExpanded ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <p className='font-normal text-base text-[#475467] leading-6'>
                  {questionData.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAsked;
