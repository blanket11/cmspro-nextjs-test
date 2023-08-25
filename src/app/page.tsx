import styles from "./page.module.scss";
import Head from "next/head";
import type { Metadata } from "next";
import HomeTemplate from "@/app/_components/Templates/HomeTemplate";

export const metadata: Metadata = {
  title: "トップページ",
  description: "サンプルページトップページです。",
};

export default function Home() {
  return <HomeTemplate />;
}
