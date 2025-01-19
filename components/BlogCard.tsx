import Image from 'next/image';
import React from 'react';

type Blog = {
  src: string;
  topic: string;
  title: string;
  description: string;
  author: string;
  date: string;
  authorImg: string;
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className='w-[384px] h-full flex flex-col items-start gap-6 max-md:w-full max-md:px-4'>
      <Image
        src={blog.src}
        alt='blog'
        width={384}
        height={240}
        className='max-md:w-full max-md:h-auto max-sm:h-[240px]'
      />
      <div className='flex flex-col items-start gap-2'>
        <p className='text-[#E63F3A] font-semibold text-[14px] leading-5'>
          {blog.topic}
        </p>
        <h3 className='w-full flex items-center justify-between font-semibold text-[#101828] text-2xl leading-7'>
          {blog.title}
          <Image
            src='/assets/arrow-up-right.svg'
            alt='arrow'
            width={24}
            height={24}
          />
        </h3>
        <p className='font-normal text-base text-[#475467] leading-6'>
          {blog.description}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        <Image src={blog.authorImg} alt='author' width={40} height={40} />
        <div className='flex flex-col'>
          <p className='text-[14px] text-[#101828] leading-5'>{blog.author}</p>
          <p className='font-normal text-[#475467] text-[14px] leading-5'>
            {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
