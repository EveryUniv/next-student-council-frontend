import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { BaseSkeleton } from 'components/ui/skeleton';

export const BannerSize = 'w-full';

export interface IBanner {
   id: number;
   url: string;
   redirectUrl: string | null;
}

/**
 * @description 메인 페이지의 배너 컴포넌트
 */
export default function Banner({ banners }: { banners?: IBanner[] }) {
   return (
      <section className='relative h-[calc(100vw-2rem)]'>
         {banners ? (
            <Swiper
               autoplay={{ delay: 500 }}
               navigation
               pagination={{ clickable: true }}
               className={`${BannerSize} absolute -top-8 z-30`}
               spaceBetween={16}
            >
               {banners?.map((item) => (
                  <SwiperSlide key={item.id} className='overflow-hidden p-4 aspect-square'>
                     <img
                        src={item.url}
                        alt='banner'
                        className='h-full w-full rounded-xl m-auto object-cover shadow-md'
                     />
                  </SwiperSlide>
               ))}
            </Swiper>
         ) : (
            <BaseSkeleton className={`${BannerSize} absolute -top-8 z-30`} />
         )}
      </section>
   );
}
