# Ninja DAO & CryptoNinja Partners 정보 허브

Ninja DAO와 CryptoNinja Partners NFT 프로젝트의 개요와 진행 상황을 한국어로 정리한 비공식 사이트입니다.

## 기술 스택

- **프레임워크**: Next.js 14 (Static Export)
- **콘텐츠**: MDX + contentlayer
- **스타일**: Tailwind CSS (다크 모드 지원)
- **애니메이션**: framer-motion
- **아이콘**: lucide-react
- **배포**: Vercel 또는 GitHub Pages

## 로컬 실행

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요:

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm run dev
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 사이트를 확인할 수 있습니다.

## 정적 파일 빌드 & 배포

정적 파일을 빌드하고 배포하려면 다음 명령어를 실행하세요:

```bash
# 정적 파일 빌드
pnpm run build

# 정적 파일 내보내기
pnpm run export  # out/ 디렉터리 생성
```

### Vercel 배포

Vercel을 통해 배포하려면:

```bash
vercel --prebuilt
```

### GitHub Pages 배포

GitHub Pages를 통해 배포하려면:

```bash
gh-pages -d out
```

## 콘텐츠 관리

모든 콘텐츠는 `/src/content` 디렉터리 내의 MDX 파일로 관리됩니다:

- `hero.mdx`: 메인 히어로 섹션
- `ninja-dao.mdx`: Ninja DAO 소개
- `cnp.mdx`: CryptoNinja Partners 소개
- `roadmap.mdx`: 로드맵 / 진행 상황
- `faq.mdx`: 자주 묻는 질문

이미지는 `/public/images` 디렉터리에 저장됩니다.

## 라이선스

MIT
