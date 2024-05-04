/**
 * 어플리케이션에서 사용하는 여러 상수들을 정의한 파일입니다.
 */

import { PROXY_HOST } from './env';

/**
 * 기본 앱 이름입니다.
 * @constant {string} DEFAULT_APP_NAME
 */
export const DEFAULT_APP_NAME = 'project';

/**
 * 에러 기본 메시지입니다.
 * @constant {string} DEFAULT_ERROR_MESSAGE
 */
export const DEFAULT_ERROR_MESSAGE = '오류가 발생하였습니다.';

/**
 * 업로드 파일 허용 확장자입니다.
 * @constant {string[]} DEFAULT_ACCEPT_FILE_EXT
 */
export const DEFAULT_ACCEPT_FILE_EXT = ['.jpg', '.jpeg', '.png', '.pdf', '.xls', '.xlsx'];

/**
 * 서버 통신 기본 URL입니다.
 * @constant {string} BASE_URL
 */
export const BASE_URL = `${PROXY_HOST}/server`;

/**
 * 권한체크 하지 않는 페이지 URL 목록입니다.
 * @constant {string[]} PUBLIC_PAGES
 */
export const PUBLIC_PAGES = ['/404', '/500', '/', '/main', '/reload', '/_error', '/policy'];

/**
 * 사이드바 레이아웃 너비입니다.
 * @constant {number} SIDEBAR_WITH
 */
export const SIDEBAR_WITH = 280;

/**
 * 데이터 행 상태 필드입니다.
 * @constant {string} ROW_STATUS_FIELD
 */
export const ROW_STATUS_FIELD = '_rowStatus_';

/**
 * 그리드 인디케이터 너비입니다.
 * @constant {number} GRID_ROW_INDICATOR_WIDTH
 */
export const GRID_ROW_INDICATOR_WIDTH = 30;

/**
 * 그리드 상태바 너비입니다.
 * @constant {number} GRID_STATEBAR_WIDTH
 */
export const GRID_STATEBAR_WIDTH = 30;

/**
 * 그리드 체크바 너비입니다.
 * @constant {number} GRID_CHECKBAR_WIDTH
 */
export const GRID_CHECKBAR_WIDTH = 30;

/**
 * 그리드 기본 높이입니다.
 * @constant {number} GRID_HEIGHT
 */
export const GRID_HEIGHT = 550;

/**
 * 그리드 헤더 높이입니다.
 * @constant {number} GRID_HEADER_HEIGHT
 */
export const GRID_HEADER_HEIGHT = 32;

/**
 * 그리드 푸터 높이입니다.
 * @constant {number} GRID_FOOTER_HEIGHT
 */
export const GRID_FOOTER_HEIGHT = 30;

/**
 * 그리드 행 높이입니다.
 * @constant {number} GRID_ROW_HEIGHT
 */
export const GRID_ROW_HEIGHT = 30;

/**
 * 페이지 네비 개수입니다.
 * @constant {number} NAVIGATE_PAGES
 */
export const NAVIGATE_PAGES = 10;

/**
 * 그리드 페이지 사이즈(페이지당 건 수)입니다.
 * @constant {number} GRID_PAGE_SIZE
 */
export const GRID_PAGE_SIZE = 15;

/**
 * 그리드 스크롤바 사이즈입니다.
 * @constant {number} GRID_SCROLLBAR_SIZE
 */
export const GRID_SCROLLBAR_SIZE = 13;
