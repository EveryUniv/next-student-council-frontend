import { API_PATH } from 'constants/api';
import { IMain } from './types/main';
import { client } from 'api';

export const main = async () => {
   try {
      const { data } = await client.get<IMain>(API_PATH.MAIN.ROOT);
      return data;
   } catch (error) {
      console.error;
   }
};

export const cafeteria = async () => {
   try {
      const { data } = await client.get(API_PATH.MAIN.CAFETERIA);
      return data;
   } catch (error) {
      console.error(error);
   }
};
