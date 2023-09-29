import React, { useState } from 'react';
import axios from 'axios';
import { API_PATH } from 'constant';
import { useAlert } from 'hooks/useAlert';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { Banner, Notice, Petition } from 'components/main';
import type { IBanner } from 'components/main/banner';
import type { INotice } from 'components/main/notice';
import type { IPetition } from 'components/main/petition';
import Hero from 'components/main/hero';
import Menu from 'components/main/menu';

interface IMain {
   carousels: IBanner[];
   recentNews: INotice[];
   popularPetitions: IPetition[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
}

export default function Main() {
   const { alert } = useAlert();
   const [main, setMain] = useState<IMain | null>(null);

   const fetchMain = async () => {
      try {
         const { data } = await axios.get<IMain>(API_PATH.MAIN.ROOT);
         setMain(data);
      } catch (e) {
         if (axios.isAxiosError<unknown>(e)) alert(e);
      }
   };

   useEffectOnce(() => {
      fetchMain();
   });

   return (
      <main>
         <Hero />
         <Banner banners={main?.carousels} />
         <div className='bg-gray-200 py-4'>
            <Notice notices={main?.recentNews} />
            <Petition petitions={main?.popularPetitions} />
            <Menu />
         </div>
      </main>
   );
}
