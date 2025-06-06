import Head from "next/head";
import { useEffect, useState } from "react";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";
import { styled } from "@stitches/react";
import JsonData from "@/data.json";
import Script from "next/script";

const Title = dynamic(() => import("@/components/Title"), { ssr: false });
const Gretting = dynamic(() => import("@/components/Gretting"), { ssr: false });
const ImageGallery = dynamic(() => import("@/components/ImageGallery"), { ssr: false });
const Location = dynamic(() => import("@/components/Location"), { ssr: false });

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: [],
  style: "normal",
});

const Footer = styled("footer", {
  background: "#D7CCC8",
  backgroundImage: "url(./assets/GroovePaper.png)",
  opacity: 0.6,
  textAlign: "center",
  width: "100%",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "-webkit-box-align": "center",
  "-webkit-box-pack": "center",
});

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="재하의 돌잔치에 초대합니다" name="Title" />
        <meta content="2025년 7월 5일 토요일 오후 12시 디토레스토랑" name="Description" />
        <meta content="2025년 7월 5일 토요일 오후 12시 디토레스토랑" name="Keyword" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="재하의 돌잔치 초대장" />
        <meta property="og:url" content="https://joonb14.github.io/year-celebration" />
        <meta property="og:title" content="재하의 돌잔치에 초대합니다" />
        <meta property="og:description" content="2025년 7월 5일 토요일 오후 12시 디토레스토랑" />
        <meta property="og:image" content="https://joonb14.github.io/year-celebration/assets/1.jpg" />
        <meta property="og:image:width" content="1339" />
        <meta property="og:image:height" content="893" />
        <meta name="theme-color" content="#BCAAA4" />
        <title>재하의 돌잔치에 초대합니다</title>
      </Head>
      <main className={`${notoSansKR.className}`}>
        <Script src="https://developers.kakao.com/sdk/js/kakao.min.js"></Script>
        <Title data={JsonData} />
        <Gretting data={JsonData} />
        <ImageGallery />
        <Location />
      </main>
    </>
  );
}
