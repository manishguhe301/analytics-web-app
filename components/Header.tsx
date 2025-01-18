import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='px-20 py-5 flex items-center justify-between'>
      <div className='pl-8 flex items-center'>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={84}
          height={32}
          className='mr-10'
        />
        <div className='flex items-center gap-8'>
          <p className='font-inter text-sm font-semibold text-[#475467] cursor-pointer'>
            Home
          </p>
          <p className='flex items-center gap-2 font-inter text-sm font-semibold text-[#475467] cursor-pointer'>
            Products
            <Image
              src='/assets/chevron-down.svg'
              alt='arrow-down'
              width={20}
              height={20}
            />
          </p>
          <p className='flex items-center gap-2 font-inter text-sm font-semibold text-[#475467] cursor-pointer'>
            Resources
            <Image
              src='/assets/chevron-down.svg'
              alt='arrow-down'
              width={20}
              height={20}
            />
          </p>
          <p className='font-inter text-sm font-semibold text-[#475467] cursor-pointer'>
            Pricing
          </p>
        </div>
      </div>
      <div className='pr-8'>
        <Image src='/assets/avatar.svg' alt='avatar' width={36} height={36} />
      </div>
    </div>
  );
};

export default Header;
