export const metadata = {
  title: '개인정보처리방침 | NinjaNote KR',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4 prose dark:prose-invert">
      <h1>개인정보처리방침</h1>
      <p>
        본 사이트는 Google Analytics 및 쿠키를 통해 익명의 방문 통계 데이터를 수집합니다. 이 정보는 사이트
        개선을 위한 분석 목적에만 사용되며, 개인을 식별할 수 있는 정보는 수집·보관하지 않습니다.
      </p>
      <h2>수집 항목</h2>
      <ul>
        <li>방문한 페이지, 체류 시간 등 이용기록</li>
        <li>브라우저 및 OS 종류, 화면 해상도 등 기기 정보</li>
        <li>IP 주소(익명화 처리)</li>
      </ul>
      <h2>보관 기간</h2>
      <p>통계 데이터는 Google Analytics 기본 정책에 따라 최대 26개월 보관 후 자동 삭제됩니다.</p>
      <h2>쿠키 거부 방법</h2>
      <p>
        사용자는 브라우저 설정 변경 또는 화면 하단 쿠키 배너를 통해 쿠키 사용에 대한 동의를 철회할 수 있습니다.
      </p>
      <h2>문의</h2>
      <p>
        개인정보 관련 문의 사항은 <a href="mailto:minji@example.com">minji@example.com</a> 으로 연락해 주세요.
      </p>
    </div>
  );
}
