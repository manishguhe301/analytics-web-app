import { BLOGS } from '@/utils/constants';
import React from 'react';
import BlogCard from './BlogCard';

const BlogsSection = () => {
  return (
    <div className='flex flex-col items-center mb-24 max-sm:mb-16'>
      <div className='flex justify-between items-start w-[80%] mb-16 max-md:w-[90%]'>
        <div className='flex flex-col'>
          <p className='mb-3 text-[#E63F3A] font-semibold text-base leading-6'>
            Our blog
          </p>
          <h1 className='mb-5 font-semibold text-[#101828] text-4xl leading-10 max-md:text-3xl max-sm:text-[30px]'>
            Lastest blog posts
          </h1>
          <p className='font-normal text-xl text-[#475467] leading-7 max-md:text-lg'>
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className='bg-[#E63F3A] px-5 py-3 rounded-lg border border-[#E63F3A] text-white font-semibold leading-6 text-base hover:bg-[#6941c6] hover:border-[#6941c6] transition ease-in-out duration-300 max-sm:hidden'>
          View all posts
        </button>
      </div>
      <div className='flex items-center gap-8 max-lg:flex-wrap justify-center max-sm:px-1'>
        {BLOGS.map((blog) => {
          return <BlogCard key={blog.title} blog={blog} />;
        })}
      </div>
      <div className='sm:hidden mt-12 w-full px-4'>
        <button className='bg-[#E63F3A] px-5 py-3 rounded-lg border border-[#E63F3A] text-white font-semibold leading-6 text-base hover:bg-[#6941c6] hover:border-[#6941c6] transition ease-in-out duration-300 w-full '>
          View all posts
        </button>
      </div>
    </div>
  );
};

export default BlogsSection;
