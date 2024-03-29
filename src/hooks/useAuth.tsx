import type { ILoginResponse } from '@api/axios-interface';
import { API_PATH, CONSTANTS } from '@constants/api';
import { ROUTES } from '@constants/route';
import { useAlert } from '@hooks/useAlert';
import type { IIdPassword } from '@shared/interfaces/default-interfaces';
import { useEnrollmentStore } from '@stores/enrollment-store';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

export const useAuth = () => {
   const navigate = useNavigate();
   const { alert } = useAlert();
   const { pathname } = useLocation();
   const [verification, setVerification] = useState(false);
   const { setEnrollment } = useEnrollmentStore();

   const login = async (loginInfo: IIdPassword) => {
      try {
         if (loginInfo.studentId.length > 0 && loginInfo.password.length > 0) {
            const { data } = await axios.post<ILoginResponse>(
               CONSTANTS.SERVER_URL + API_PATH.USER.LOGIN,
               loginInfo,
            );
            localStorage.setItem(CONSTANTS.atk_key, data.accessToken);
            localStorage.setItem(CONSTANTS.rtk_key, data.refreshToken);
            pathname === '/login' ? navigate(ROUTES.MAIN) : setVerification(true);
         } else {
            alert('입력해주세요');
         }
      } catch (error) {
         alert(error);
      }
   };

   const logout = () => {
      try {
         localStorage.removeItem(CONSTANTS.atk_key);
         localStorage.removeItem(CONSTANTS.rtk_key);
         setEnrollment(undefined);
         navigate(ROUTES.MAIN);
      } catch (error) {
         alert(error);
      }
   };

   const isLoggedIn = (() => !!localStorage.getItem(CONSTANTS.atk_key))();

   return {
      isLoggedIn,
      login,
      logout,
      setVerification,
      verification,
   };
};
