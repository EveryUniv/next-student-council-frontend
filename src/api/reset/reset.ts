import { client } from 'api';
import { API_PATH } from 'constants/api';
import { formatphoneNumber } from 'utils/tell';
import { ResetPwParams, VerifyCodeParams } from './types/reset';

export const findId = async (phoneNumber: string) => {
   const formattedPhoneNumber = formatphoneNumber(phoneNumber);
   try {
      const { data } = await client.post(API_PATH.USER.RESET.FIND_ID, {
         phoneNumber: formattedPhoneNumber,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const phoneVerification = async (phoneNumber: string) => {
   const formattedPhoneNumber = formatphoneNumber(phoneNumber);
   try {
      const { data } = await client.post(API_PATH.USER.RESET.PHONE_VERIFY, {
         phoneNumber: formattedPhoneNumber,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const confirmCode = async ({ token, code }: VerifyCodeParams) => {
   try {
      const { data } = await client.post(API_PATH.USER.RESET.PHONE_VERIFY_CODE, {
         token: token,
         code: code,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};

export const resetPw = async ({ token, password }: ResetPwParams) => {
   try {
      const { data } = await client.post(API_PATH.USER.RESET.RESET_PW, {
         token: token,
         password: password,
      });
      return data;
   } catch (error) {
      console.error(error);
   }
};