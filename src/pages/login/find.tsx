import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from 'components/ui/box';
import Button from 'components/ui/button';
import { ROUTES } from 'constant';

export default function FindIdPw() {
   const navigate = useNavigate();
   const goToFindId = () => {
      navigate(ROUTES.LOGIN.FINDID);
   };

   const goToResetPW = () => {
      navigate(ROUTES.LOGIN.FINDPW);
   };

   return (
      <>
         <h1>Login</h1>
         <h2>ID 찾기 PW 재설정</h2>
         <Box>
            <h3>ID 찾기</h3>
            <span>잃어버린 ID에 대해서 휴대전화번호를 입력하면, 문자를 통해서 ID를 제공 받습니다.</span>
         </Box>
         <Button onClick={goToFindId}>ID 찾기</Button>
         <Box>
            <h3>PW 재설정</h3>
            <span>
               잃어버린 PW에 대해서 휴대전화번호를 입력하면, 인증번호 제공을 통해 새로운 비밀번호를
               설정합니다.
            </span>
         </Box>
         <Button onClick={goToResetPW}>PW 재설정</Button>
      </>
   );
}
