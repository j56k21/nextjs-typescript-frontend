module.exports = {
  // 배포 대상에 대한 설정
  apps: [
    {
      name: 'react-project-frontend', // app이름
      script: 'yarn', // 실행할 스크립트 파일
      args: 'start:prod', // script args
      instances: 0, // cpu 코어수 만큼 프로세스 생성 (instance 항목값을 ‘0’으로 설정하면 CPU 코어 수 만큼 프로세스를 생성)
      exec_mode: 'cluster', // 클러스터 모드
      interpreter: 'bash', // next.js와 pm2 사용시 interpreter 설정
      watch: 'true', // 파일 변경 감지
      ignore_watch: ['node_modules'], // 반대로 해당폴더의 파일변경은 무시
      max_memory_restart: '300M', // 프로세스의 메모리가 300MB에 도달하면 reload 실행
    },
  ],

  // 배포에 관한 설정
  deploy: {
    production: {},
  },
};
