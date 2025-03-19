'use client'
 import React from 'react';
 import {Swiper, SwiperSlide} from 'swiper/react'
 import {AutoPlay, Navigation, Pagination} from 'swiper/modules'
 import * as Icon from '@phosphor-icons/react/dist/ssr'
 
 const Slider = () => {
     return (
         <>
            <div className='slider-block'>
                <div className='prev-arrow items-center justify-center'>
                <Icon.CaretLeft className='text-white heading6' weight='bold'/>
                </div>
        
                <div className='slider-main'>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.prev-arrow',
                            nextEl: '.next-arrow'
                        }}
                        loop={true}
                        pagination={{ clickable: true }}
                        speed={400}
                        modules={[Pagination,AutoPlay,Navigation]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000
                        }}
                    >
            
                        <SwiperSlide>
                            
                        </SwiperSlide>  
                    </Swiper>
            
                </div>
            </div>
         </>
     );
 };
 
 export default Slider;