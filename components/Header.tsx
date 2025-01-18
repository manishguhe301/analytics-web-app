'use client';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { NAV_ITEMS } from '@/utils/constants';

const NavLink = ({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown: boolean;
}) => (
  <p
    className={`flex items-center gap-2 font-inter text-sm font-semibold text-[#475467] cursor-pointer ${
      hasDropdown ? 'justify-between' : ''
    }`}
  >
    {label}
    {hasDropdown && (
      <Image
        src='/assets/chevron-down.svg'
        alt='arrow-down'
        width={20}
        height={20}
      />
    )}
  </p>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='relative px-20 py-5 flex items-center justify-between max-lg:px-10 max-sm:p-4 border-2 border-b-[#F2F4F7]'>
      <div className='pl-8 flex items-center max-lg:pl-6 max-sm:pl-2 '>
        <Image
          src='/assets/logo.svg'
          alt='logo'
          width={84}
          height={32}
          className='mr-10 max-lg:mr-8'
        />
        <div className='hidden sm:flex items-center gap-8 max-lg:gap-6'>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              hasDropdown={item.hasDropdown}
            />
          ))}
        </div>
      </div>

      <div className='pr-8 max-lg:pr-6 max-sm:pr-2'>
        <Image
          src='/assets/avatar.svg'
          alt='avatar'
          width={36}
          height={36}
          className='hidden sm:block'
        />
        <Image
          src='/assets/hamburger.svg'
          alt='menu'
          width={40}
          height={40}
          className='sm:hidden cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && (
        <div className='absolute top-full right-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 sm:hidden'>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              label={item.label}
              hasDropdown={item.hasDropdown}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
