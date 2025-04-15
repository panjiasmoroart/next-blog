import Footer from '@/components/Footer/Footer';
 import Menu from '@/components/Header/Menu/Menu';
 import TopNav from '@/components/Header/TopNav/TopNav';
 import Partner from '@/components/Partner/Partner'; 
 import Breadcrumb from '@/components/Section/Breadcrumb'; 
 import React from 'react';
 import serviceData from '@/data/service.json'
 import Image from 'next/image';
 import Link from 'next/link';
 
 const BlogDetails = () => {
     return (
         <div className="overflow-x-hidden">
       <header id="header">
           <TopNav/>
           <Menu/>
       </header>
 
      <main className="content">
         <Breadcrumb link="Blog Details" img="/images/header.webp" title='Blog Details' desc="The jobs report soundly beat expectations, with job gains broadly spread across the economy and about 60% higher" />
     
     <div className='content-detail-block lg:py-[100px] sm:py-16 py-10'>
         <div className='container'>
             <div className='flex max-xl:flex-col gap-y-8'>
             <div className='w-full xl:w-3/4'>
 
             
         <div className='w-full xl:pr-[80px]'>
         <div className='heading3'>
         Cryptocurrency Trading
         </div>
         <div className='bg-img mt-5 mb-5'>
             <Image width={5000} height={5000} className='w-full h-full rounded-xl' src='/images/assessment.webp' alt='image belum tersedia' /> 
         </div>
         <div className='body2 text-secondary mt-4'>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
 
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  
         </div> 
          </div>
 
       </div>
 
 
     <div className='w-full xl:w-1/4'>
         <div className='more-infor border border-line rounded-xl py-8 px-8'>
             <div className='heading6'>
             Categories
             </div> 
 
         <div className='list-nav mt-4'>
             <Link className='nav-item rounded-lg flex-between p-6' href='/'>
             <div className='text-button text-secondary'>
             payment solution
             </div>
             </Link>
 
             <Link className='nav-item rounded-lg flex-between p-6' href='/'>
             <div className='text-button text-secondary'>
             personal finance
             </div>
             </Link>
 
             <Link className='nav-item rounded-lg flex-between p-6' href='/'>
             <div className='text-button text-secondary'>
             online banking
             </div>
             </Link>
 
 
             <Link className='nav-item rounded-lg flex-between p-6' href='/'>
             <div className='text-button text-secondary'>
             financial planning
             </div>
             </Link>
 
         </div> 
         </div>
 
     <div className='ads-block rounded-lg md:mt-10 mt-6 relative'>
         <div className='bg-img'>
             <Image width={5000} height={5000} src='/images/ads.webp' alt='image belum tersedia' /> 
         </div>
 
         <div className='text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8'>
             <div className='title'>
                 <div className='heading5 text-white'>
                 Let's Talk
                 </div>
                 <div className='body3 text-white mt-4'>
             If you have project contact us
                 </div> 
             </div>
         <div className='button-block md:mt-10 mt-6'>
              <Link className='button-main hover:bg-black hover:text-white inline-block bg-white text-button' href='/contact'>
              Contact Us
              </Link>
 
         </div>
 
         </div>
 
     </div>
 
 
 
     </div>
 
  
             </div> 
         </div> 
     </div>
 
      
      </main>
 
      <Partner className='lg:mt-[100px] sm:mt-16 mt-10' /> 
       <footer id="footer">
       <Footer/>
       </footer>
 
 
         </div>
     );
 };
 
 export default BlogDetails;