import { Button } from '@components/ui/button';
import { API_PATH, CONSTANTS } from '@constants/api';
import { shadowStyle } from '@constants/shadow';
import { useAlert } from '@hooks/useAlert';
import { useApi } from '@hooks/useApi';
import { useAuth } from '@hooks/useAuth';
import MyPageLayout from '@layouts/MyPageLayout';
import React from 'react';
import { BiSolidCalendarStar } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa6';
import { IoIosListBox } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
   const { logout } = useAuth();
   const { alert } = useAlert();
   const { delete: axiosDelte } = useApi();
   const navigate = useNavigate();
   const deleteAccount = async () => {
      try {
         await axiosDelte(CONSTANTS.SERVER_URL + API_PATH.USER.ME, { authenticate: true });
         alert('탈퇴하였습니다.');
         logout();
      } catch (error) {
         alert(error);
      }
   };

   return (
      <MyPageLayout>
         <nav className='flex justify-center sticky mt-[-35px]'>
            <ul
               className={`bg-white flex justify-between ${shadowStyle.default} rounded-[40px] w-11/12 px-10 pt-3 pb-2`}
            >
               {NavContent.map(({ id, name, icon }) => (
                  <li
                     key={id}
                     className='flex flex-col items-center text-4xl cursor-pointer'
                     onClick={() => {
                        id === 'edit' ? navigate('password') : navigate(id);
                     }}
                  >
                     {icon}
                     <p className='text-[0.6rem] leading-5'>{name}</p>
                  </li>
               ))}
            </ul>
         </nav>
         <div className='p-4 flex flex-col gap-3'>
            <Button size='default' variant='default' onClick={() => logout()}>
               로그아웃
            </Button>
            <Button size='default' onClick={() => deleteAccount()}>
               탈퇴하기
            </Button>
         </div>
      </MyPageLayout>
   );
}

const NavContent = [
   {
      id: 'edit',
      name: '내 정보 수정',
      icon: <FaUser />,
   },
   {
      id: 'post',
      name: '내가 쓴 글',
      icon: <IoIosListBox />,
   },
   {
      id: 'event',
      name: '이벤트',
      icon: <BiSolidCalendarStar />,
   },
];
