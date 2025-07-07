import NinjaDaoPage from "@/components/NinjaDaoPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ninja DAO | NinjaNote KR",
  description: "일본 최대 NFT 커뮤니티 Ninja DAO에 대한 소개와 리소스를 제공합니다.",
  openGraph: {
    title: "Ninja DAO | NinjaNote KR",
    description: "일본 최대 NFT 커뮤니티 Ninja DAO에 대한 소개와 리소스를 제공합니다.",
    images: [
      {
        url: "/images/NinjaDAO.png",
        width: 1200,
        height: 630,
        alt: "Ninja DAO OG Image"
      }
    ],
    type: "article"
  },
};

export default function NinjaDaoPageRoute() {
  return <NinjaDaoPage />;
}
