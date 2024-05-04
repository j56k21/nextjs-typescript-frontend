/* eslint-disable prefer-destructuring */
/**
 * 어플리케이션 설정과 환경 변수에 대한 상수들을 정의한 파일입니다.
 */

/**
 * 개발 환경 여부를 나타내는 상수입니다.
 */
export const IS_DEV = process.env.NEXT_PUBLIC_SYSTEM_MODE !== 'production';

/**
 * 환경 설정 SYSTEM MODE 나타내는 상수입니다.
 */
export const SYSTEM_MODE = process.env.NEXT_PUBLIC_SYSTEM_MODE;

/**
 * 서버 포트를 나타내는 상수입니다.
 */
export const PORT = process.env.PORT || '3000';

/**
 * 프록시 호스트를 나타내는 상수입니다.
 */
export const PROXY_HOST = process.env.PROXY_HOST || `http://localhost:${PORT}`;

/**
 * 타임존 정보를 나타내는 상수입니다.
 */
export const TZ = process.env.TZ || 'Asia/Seoul';

/**
 * 서버 API URL을 나타내는 상수입니다.
 */
export const SERVER_API_URL = process.env.SERVER_API_URL;


/**
 * 클라이언트 ID를 나타내는 상수입니다.
 */
export const CLIENT_ID = process.env.CLIENT_ID || 'clientId';
