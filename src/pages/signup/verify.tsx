import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSTANTS, API_PATH } from 'constants/api';
import { ROUTES } from 'constants/route';
import axios from 'axios';
import { Regex } from 'utils/regex';
import Input from 'components/ui/input';
import { useAlert } from 'hooks/useAlert';
import Button from 'components/ui/button';
import { useEffectOnce } from 'hooks/useEffectOnce';
import { useLayout } from 'hooks/useLayout';
import Text from 'components/ui/typo/text';
import Heading from 'components/ui/typo/heading';

interface StudentVerifyResponse {
   signupToken: string;
   student: {
      studentName: string;
      studentId: string;
      major: string;
   };
}

interface IVerifyInfo {
   dkuStudentId: string;
   dkuPassword: string;
}

export default function SignupVerify() {
   const navigate = useNavigate();
   const { setLayout } = useLayout();

   const [verifyInfo, setVerifyInfo] = useState<IVerifyInfo>({
      dkuStudentId: '',
      dkuPassword: '',
   });

   const [isFormValid, setIsFormValid] = useState(false);

   const { alert } = useAlert();

   const verify = async (verifyInfo: IVerifyInfo) => {
      try {
         const { data } = await axios.post<StudentVerifyResponse>(
            CONSTANTS.SERVER_URL + API_PATH.USER.SIGNUP.VERIFY,
            verifyInfo,
         );
         navigate(ROUTES.SIGNUP.INFO, { state: { data } });
      } catch (error) {
         alert(error);
      }
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setVerifyInfo({
         ...verifyInfo,
         [name]: value,
      });
   };

   useEffect(() => {
      const isStudentIdValid = Regex.studentId.test(verifyInfo.dkuStudentId);
      const isPasswordValid = verifyInfo.dkuPassword !== '';
      setIsFormValid(isStudentIdValid && isPasswordValid);
   }, [verifyInfo]);

   const handleSubmit = () => {
      verify(verifyInfo);
   };

   useEffectOnce(() => {
      setLayout({
         title: null,
         backButton: true,
         isMain: false,
         fullscreen: true,
         headingStyle: '',
         margin: 'mt-[140px]',
         rounded: true,
      });
   });

   return (
      <div className='flex flex-col px-10 pt-12'>
         <Heading as='h1' className='text-2xl font-extrabold mb-[14px]'>
            Sign up
         </Heading>
         <Heading as='h2' className='text-base font-extrabold mb-6'>
            단국대학교 총학생회 회원가입
         </Heading>
         <Heading as='h3' className="text-sm before:content-['●'] flex items-center gap-1 mb-8">
            학생 인증
         </Heading>
         <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-md mx-auto'>
            <Input
               type='number'
               name='dkuStudentId'
               placeholder='학번 입력'
               value={verifyInfo.dkuStudentId}
               onChange={handleInputChange}
               size='md'
               className='rounded-[10px]'
            />
            <Input
               type='password'
               name='dkuPassword'
               placeholder='비밀번호 입력'
               value={verifyInfo.dkuPassword}
               onChange={handleInputChange}
               size='md'
               className='rounded-[10px]'
            />
            <Text className="mb-8 text-gray02 text-[10.5px] whitespace-pre-wrap mt-2 before:content-['●'] before:mr-1">
               {
                  '단국대학교 웹정보 로그인 시 사용 되는 ID, PW를 통해\n 학생인증이 진행됩니다. (입력한 정보는 인증 후 즉시 폐기됩니다)'
               }
            </Text>
            <Button
               variant='default'
               className='w-[311px] rounded-2xl py-3'
               isDisabled={!isFormValid}
               onClick={handleSubmit}
            >
               <Text className='text-base font-bold'>인증</Text>
            </Button>
         </form>
      </div>
   );
}
