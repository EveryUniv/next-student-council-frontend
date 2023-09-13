export const Regex = {
   /** 학번 정규식 */
   studentId: /^[0-9]{8}$/,
   /**
    * @description 비밀번호 정규식,
    * 8자 이상 16자 이하
    * 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합
    */
   password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
};