import { FEATURES_DATA } from '@/utils/constants';
import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-base text-[#E63F3A] leading-7 font-bold pb-3'>
        Features
      </p>
      <h1 className='font-semibold text-4xl leading-10 text-[#101828] text-center pb-5 max-md:text-3xl max-sm:text-[30px] max-sm:px-8 max-sm:pb-4'>
        Analytics that feels like it’s from the future
      </h1>
      <p className='w-[46%] font-normal text-lg text-[#475467] leading-7 max-sm:w-[90%] max-sm:px-6 text-center max-md:w-[70%]'>
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className='mt-16 mb-24 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:mt-12 max-sm:px-4 max-sm:gap-10 max-sm:mb-16'>
        {FEATURES_DATA.map((feature) => {
          return <FeatureCard feature={feature} key={feature.title} />;
        })}
      </div>
    </div>
  );
};

export default Features;
