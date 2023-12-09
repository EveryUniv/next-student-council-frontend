export const CONSTANTS = {
   /** 루트 주소값 */
   get BASE_URL() {
      const url = process.env.REACT_APP_BASE_URL;
      if (!url) {
         throw new Error('환경변수 REACT_APP_BASE_URL이 정의되지 않았습니다.');
      }
      return url;
   },

   /** 서버 주소값 */
   get SERVER_URL() {
      const url = process.env.REACT_APP_API_URL;
      if (!url) {
         throw new Error('환경변수 REACT_APP_API_URL이 정의되지 않았습니다.');
      }
      return url;
   },

   /** AccessToken Key */
   atk_key: 'damda-atk',
   /** RefreshToken Key */
   rtk_key: 'damda-rtk',

   /** 하단 네비게이션 사이즈 */
   bottomNavSize: '60px',
};

/**
 * @description 라우터 경로
 * @example
 * import { ROUTES } from "src/routes";
 * console.log(ROUTES.MAIN.root); // "/"
 * @author 이호연
 */
export const ROUTES = {
   /** 메인 화면 */
   MAIN: '/',
   /** 로그인 화면 */
   LOGIN: {
      /** 루트 */
      ROOT: '/login',
      /** 아이디 및 비밀번호 찾기 */
      FINDIDPW: '/login/find/user',
      /** 아이디 찾기 */
      FINDID: '/login/find/id',
      /** 비밀번호 재설정 */
      FINDPW: '/login/find/pw',
   },
   /** 마이페이지 */
   MYPAGE: '/mypage',
   /** 404 화면 */
   NOT_FOUND: '*',
   /** 회원가입 */
   SIGNUP: {
      /** 루트 */
      ROOT: '/signup',
      /** 동의 */
      TERMS: '/signup/terms',
      /** 학생 인증 */
      VERIFY: '/signup/verify',
      /** 회원 정보 입력 */
      INFO: '/signup/info',
   },
   /** 대여물품 */
   RENTAL: {
      /** 루트 */
      ROOT: '/rental',
      /** 상세 품목 조회 */
      ITEM: '/rental/:id',
   },
   PETITION: {
      /** 청원 루트 */
      ROOT: '/petition',
      /** 청원 상세보기 */
      POST: '/petition/:id',
      /** 청원 글쓰기 */
      SUBMIT: '/petition/submit',
   },
   /** 공지사항 */
   NOTICE: {
      /** 루트 */
      ROOT: '/notice',
      /** 청원 글 작성 */
      POST: '/notice/post',
   },
};

/**
 * @description API 경로
 */
export const API_PATH = {
   USER: {
      /** 내 정보 조회 */
      ME: '/user',
      /** 로그인 */
      LOGIN: {
         ROOT: '/user/login',
         FIND_ID: '/user/find/id',
         FIND_PW: 'user/find/pwd',
         CODE_VERIFICATION: '/user/find/pwd/verify',
      },
      /** 회원가입 */
      SIGNUP: {
         VERIFY: '/user/dku/verify',
         INFO: {
            /** 회원가입 */
            ROOT: (signupToken: string) => `/user/${signupToken}`,
            /** 닉네임 중복 검사 */
            NICKNAME: '/user/valid',
            /** 인증 SMS 전송 */
            PHONE_VERIFICATION: (signupToken: string) => `/user/sms/${signupToken}`,
            /** SMS 코드 확인 */
            CODE: (signupToken: string) => `/user/sms/verify/${signupToken}`,
         },
      },
   },
   MAIN: {
      /** 메인페이지 모든 데이터 */
      ROOT: '/main',
      /** 캐러셀 목록 */
      CAROUSEL: '/main/carousel',
      /** 학사일정 */
      SCHEDULE: '/main/schedule',
   },
   POST: {
      /* 청원게시판 */
      PETITION: '/post/petition',
      RENTAL: {
         /** 대여물품 목록 */
         ITEM: '/rental/item',
         /** 대여물품 단건조회 */
         ITEM_DETAIL: (id: string) => `/rental/${id}`,
      },
      /** 총학 게시글 */
      NOTICE: '/post/news',
   },
};

/**
 * @description API query string
 */
export const QUERY_STRING = {
   PAGE: 'page',
   SIZE: 'size',
   SORT: 'sort',
   KEYWORD: 'keyword',
};

/**
 * @description Page Size
 */
export const PAGE_SIZE = {
   RENTAL: 20,
};
