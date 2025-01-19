import Image from 'next/image';
import React from 'react';

type Feature = {
  src: string;
  title: string;
  description: string;
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className='h-[178px] w-[384px] flex flex-col items-center max-sm:w-full max-sm:h-full'>
      <Image
        src={feature.src}
        alt='feature-image'
        width={48}
        height={48}
        className='mb-4 max-sm:h-10 max-sm:w-10'
      />
      <p className='font-semibold text-xl text-[#101828] leading-7 text-center pb-2 max-sm:text-lg'>
        {feature.title}
      </p>
      <p className='text-base text-[#475467] leading-6 font-normal text-center'>
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
