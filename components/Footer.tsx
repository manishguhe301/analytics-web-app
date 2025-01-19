import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20 flex flex-col items-center'>
      <div className='flex justify-center items-center gap-8 mb-16 max-sm:mb-12 max-md:grid max-md:grid-cols-3 max-sm:grid-cols-2'>
        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Product
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Overview
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Features
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Solutions{' '}
            <span className='px-2 bg-[#ECFDF3] border border-[#ABEFC6] rounded-2xl text-[#067647] text-[12px]'>
              New
            </span>
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Tutorials
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Pricing
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Releases
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Company
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            About us
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Careers
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Press{' '}
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            News
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Media kit
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Contact
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Resources
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Blog
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Newsletter
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Events{' '}
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Help centre
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Tutorials
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Support
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Use cases
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Startups
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Enterprise
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Government{' '}
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            SaaS centre
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Marketplaces
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Ecommerce
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Social
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Twitter
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            LinkedIn
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Facebook{' '}
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            GitHub
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            AngelList
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Dribbble
          </p>
        </div>

        <div className='flex flex-col items-start gap-4 w-[176px]'>
          <h6 className='font-semibold text-[14px] text-[#667085] leading-5'>
            Legal
          </h6>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Terms
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Privacy
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467] flex items-center gap-2'>
            Cookies{' '}
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Licenses
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Settings
          </p>
          <p className='font-semibold text-base leading-6 text-[#475467]'>
            Contact
          </p>
        </div>
      </div>
      <hr className=' w-[80%] border-[#EAECF0] max-sm:w-[90%] ' />
      <footer className='w-[80%] flex items-center justify-between pt-8 pb-12 max-sm:flex-col max-sm:gap-6 max-sm:items-start'>
        <Image src='/assets/logo.svg' alt='logo' width={84} height={32} />
        <p className='text-[#667085] text-base font-normal leading-6'>
          © 2077 zysktechnologies. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
