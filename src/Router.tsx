import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constant';
import DefaultLayout from 'layouts/DefaultLayout';
import PetitionBoard from 'pages/petition';
import Notice from 'pages/notice/index';
import NoticePost from 'pages/notice/post';
import PetitionForm from 'pages/petition/post';

import Main from 'pages';
import NotFound from 'pages/404';
import Login from 'pages/login/index';
import FindIdPw from 'pages/login/find';
import FindId from 'pages/login/find-id';
import FindPW from 'pages/login/find-pw';
import Signup from 'pages/signup';
import SignupTerms from 'pages/signup/terms';
import SignupVerify from 'pages/signup/verify';
import SignupInfo from 'pages/signup/info';
import MyPage from 'pages/mypage';
import PrivateRoute from 'PrivateRoute';

/**
 * @description 라우터
 * @author 이호연
 */
export default function Router() {
   return (
      <BrowserRouter>
         {/* TODO: 로딩 컴포넌트 만들어 넣기 */}
         <DefaultLayout>
            <Routes>
               <Route path={ROUTES.MAIN} element={<Main />} />
               <Route path={ROUTES.LOGIN.ROOT} element={<Login />} />
               <Route path={ROUTES.LOGIN.FINDIDPW} element={<FindIdPw />} />
               <Route path={ROUTES.LOGIN.FINDID} element={<FindId />} />
               <Route path={ROUTES.LOGIN.FINDPW} element={<FindPW />} />
               <Route
                  path={ROUTES.MYPAGE}
                  element={
                     <PrivateRoute>
                        <MyPage />
                     </PrivateRoute>
                  }
               />
               <Route path={ROUTES.SIGNUP.ROOT} element={<Signup />}>
                  <Route index path={ROUTES.SIGNUP.VERIFY} element={<SignupVerify />} />
                  <Route path={ROUTES.SIGNUP.TERMS} element={<SignupTerms />} />
                  <Route path={ROUTES.SIGNUP.INFO} element={<SignupInfo />} />
               </Route>
               <Route path={ROUTES.PETITION.ROOT} element={<PetitionBoard />} />
               <Route path={ROUTES.PETITION.SUBMIT} element={<PetitionForm />} />
               <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
               <Route path={ROUTES.NOTICE.ROOT} element={<Notice />}>
                  <Route path={ROUTES.NOTICE.POST} element={<NoticePost />} />
               </Route>
            </Routes>
         </DefaultLayout>
      </BrowserRouter>
   );
}
