import { IFormInfo } from '@api/upload/types/upload';
import Post from '@components/main/post';
import { API_PATH } from '@constants/api';
import { ROUTES } from '@constants/route';
import { useFormUpload } from '@hooks/useFormUpload';
import useImageUpload from '@hooks/useImageUpload';
import React from 'react';

export default function NoticePost() {
   const initFormInfo: IFormInfo = {
      title: '',
      body: '',
      files: [],
   };

   const { formInfo, setFormInfo, handleUpdate, handleSubmit } = useFormUpload({
      initFormInfo: initFormInfo,
      API_PATH: API_PATH.POST.NOTICE.ROOT,
      NAVIGATE_PATH: ROUTES.NOTICE.ROOT,
   });

   const { imageList, addImage, deleteImage } = useImageUpload();

   return (
      <Post
         pageTitle='공지'
         navigateUrl={ROUTES.NOTICE.POST}
         formInfo={formInfo}
         setFormInfo={setFormInfo}
         handleUpdate={handleUpdate}
         handleSubmit={handleSubmit}
         imageList={imageList}
         addImage={addImage}
         deleteImage={deleteImage}
      />
   );
}
