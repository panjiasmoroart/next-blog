import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from '@phosphor-icons/react/dist/ssr';
 
const BlogList = ({data}) => {
 
    return (
        <div className='list-blog lg:py-[100px] sm:py-16 py-10'>
            <div className='container'>
                <div className='flex max-lg:flex-col gap-y-10'>
                    <div className='w-full lg:w-2/3'>
                        <div className='list flex flex-col gap-y-10'>
                            {
                                data.slice(0, 5).map(( item, index ) => (
                                <Link key={index} className='blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5' href='/'>
                                    <div className='w-full md:w-1/2'>
                                        <div className='bg-img w-full overflow-hidden rounded-2xl'>
                                            <Image alt={item.img} width={5000} height={5000} className='w-full h-full block' src={item.img} />  
                                        </div>
                                    </div>

                                    <div className='w-full md:w-1/2'>
                                        <div className='caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-slate-100'>
                                            {item.category}
                                        </div>
                                        <div className='heading6 mt-2'>{item.title}</div>
                                        <div className='date flex items-center gap-4 mt-2'>
                                            <div className='author caption2 text-secondary'> By <span className='text-onsurface'>{item.author}</span> 
                                            </div>
                                    
                                            <div className='item-date flex items-center'>
                                                <Icon.CalendarBlank weight='bold' />
                                                <span className='ml-1 caption2'>{item.date}</span> 
                                            </div> 
                                        </div>
                                    
                                        <div className='body3 text-secondary mt-4 pb-4'>{item.desc}</div>
                                        <div className='read font-bold underline'>Read More</div>
                                    </div>
                                </Link>
                                )) 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default BlogList;