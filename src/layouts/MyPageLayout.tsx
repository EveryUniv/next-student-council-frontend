import React from 'react';
import { API_PATH } from 'constants/api';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import { useApi } from 'hooks/useApi';

interface IMyInfo {
   studentId: string;
   username: string;
   nickname: string;
   yearOfAdmission: string;
   major: string;
   department: string;
   phoneNumber: string;
   writePostCount: number;
   commentedPostCount: number;
   likedPostCount: number;
   admin: boolean;
}

export default function MyPageLayout({
   children,
   getStudentId,
}: {
   children: React.ReactNode;
   getStudentId?: (id: string) => void;
}) {
   const { setLayout } = useLayout();
   const [myInfo, setMyInfo] = React.useState<IMyInfo | null>(null);
   const { get } = useApi();

   const fetchMyInfo = async () => {
      const data = await get<IMyInfo>(API_PATH.USER.ME, { authenticate: true });
      setMyInfo(data);
      getStudentId && getStudentId(data.studentId);
   };
   useEffectOnce(() => {
      fetchMyInfo();
      setLayout({
         title: '',
         backButton: true,
         isMain: false,
         fullscreen: false,
         headingStyle: '',
         subHeadingStyle: '',
         margin: '',
         rounded: false,
      });
   });

   return (
      <div className='h-[calc(100vh-110px)]'>
         <div className='flex justify-between px-8 pt-4 pb-14 bg-black text-white'>
            <div className='flex flex-col justify-evenly'>
               <strong className='text-2xl'>{myInfo?.nickname}</strong>
               <p>
                  {myInfo?.studentId} <br />
                  {myInfo?.department} {myInfo?.major}
               </p>
            </div>
            <ProfileImage />
         </div>
         {children}
      </div>
   );
}

export const ProfileImage = () => (
   <div className='rounded-full bg-slate-300 w-[7rem] h-[7rem] aspect-square overflow-hidden'>
      <img
         src={''} // API 미완료
      />
   </div>
);