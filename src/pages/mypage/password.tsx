import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import Text from '@components/ui/text';
import { useAuth } from '@hooks/useAuth';
import MyPageLayout from '@layouts/MyPageLayout';
import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyPagePassword() {
   const [loginInfo, setLoginInfo] = useState({ studentId: '', password: '' });
   const getStudentId = (id: string) => setLoginInfo((prev) => ({ ...prev, studentId: id }));
   const { login, verification, setVerification } = useAuth();
   const navigate = useNavigate();
   const handle = {
      login: (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         login(loginInfo);
      },
   };
   useEffect(() => {
      verification && navigate('/mypage/edit');
      setVerification(false);
   }, [verification]);

   return (
      <MyPageLayout getStudentId={getStudentId}>
         <form className='w-full p-4 flex flex-col gap-4 mt-12' onSubmit={handle.login}>
            <Text length={4} className='font-bold text-lg'>
               비밀번호를 입력해주세요
            </Text>
            <Input
               type='password'
               placeholder='password'
               value={loginInfo.password}
               size='full'
               onChange={(e) => {
                  setLoginInfo((prev) => ({ ...prev, password: e.target.value }));
               }}
            />
            <Button size='default' className='rounded-lg'>
               확인
            </Button>
         </form>
      </MyPageLayout>
   );
}
