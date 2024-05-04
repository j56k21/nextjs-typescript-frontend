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
 * Bearer 토큰의 접두사를 나타내는 상수입니다.
 */
export const BEARER_PREFIX = process.env.BEARER_PREFIX || 'Bearer ';

/**
 * 클레임 이름을 나타내는 상수입니다.
 */
export const CLAIM_NAME = process.env.CLAIM_NAME || 'Authorization';

/**
 * 언어 이름을 나타내는 상수입니다.
 */
export const LANGUAGE_NAME = process.env.LANGUAGE_NAME || 'Accept-Language';

/**
 * 리프레시 토큰을 나타내는 상수입니다.
 */
export const REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'refreshToken';

/**
 * 액세스 토큰을 나타내는 상수입니다.
 */
export const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'token';

/**
 * OTP 토큰을 나타내는 상수입니다.
 */
export const OTP_TOKEN = process.env.OTP_TOKEN || 'otpToken';

/**
 * OTP 등록 상태를 나타내는 상수입니다.
 */
export const OTP_REG_STATUS = process.env.OTP_REG_STATUS || 'otpRegStatus';

/**
 * 클라이언트 ID를 나타내는 상수입니다.
 */
export const CLIENT_ID = process.env.CLIENT_ID || 'clientId';

/**
 * UX Booster 클라이언트 ID를 나타내는 상수입니다.
 */
export const UXBOOSTER_CLIENT_ID = process.env.UXBOOSTER_CLIENT_ID || 'X-Booster-Client-Id';

/**
 * 로그 레벨을 나타내는 상수입니다.
 */
export const LOG_LEVEL = process.env.NEXT_PUBLIC_LOG_LEVEL || 'info';

/**
 * RealGrid2 라이선스 키를 나타내는 상수입니다.
 */
export const REALGRID2_LICENSE_KEY = process.env.NEXT_PUBLIC_REALGRID2_LICENSE_KEY;

/**
 * UBI 서버 API URL을 나타내는 상수입니다.
 */
export const UBI_SERVER_API_URL = process.env.NEXT_PUBLIC_UBI_SERVER_API_URL;

/**
 * 관리자 이메일 주소를 나타내는 상수입니다.
 */
export const ADMIN_EMAIL_ADDR = process.env.NEXT_PUBLIC_ADMIN_EMAIL_ADDR;

/**
 * API 로딩 표시 여부를 나타내는 상수입니다.
 */
export const IS_SHOW_API_LOADING = process.env.NEXT_PUBLIC_SHOW_API_LOADING === 'true';

/**
 * OATUH 인증에 필요한 요청헤더를 나타내는 상수입니다.
 */
export const GOOGLE_AUTHORIZATION = 'Google-Authorization';

/**
 * OATUH 클라이언트ID를 나타내는 상수입니다.
 */
export const OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
export const OAUTH_REDIRECT_URI = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI;
export const OAUTH_SCOPE = process.env.NEXT_PUBLIC_OAUTH_SCOPE;
export const OAUTH_URL = process.env.NEXT_PUBLIC_OAUTH_URL;
