import { CourseModuleMobile } from "@/components/course/CourseModuleMobile";
import { ConnectionBlock } from "@/components/home/connection-block/ConnectionBlock";
import { DealBlock } from "@/components/home/deal-block/DealBlock";
import { FaqBlock } from "@/components/home/faq-block/FaqBlock";
import { GuaranteesBlock } from "@/components/home/guarantees-block/GuaranteesBlock";
import { GuideBlock } from "@/components/home/guide-block/GuideBlock";
import { ManagerBlock } from "@/components/home/manager-block/ManagerBlock";
import { OfficeBlock } from "@/components/home/office-block";
import { PrevieBlock } from "@/components/home/previe-block";
import { WhyUsBlock } from "@/components/home/why-us-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brodskiy Exchange",
  description: "",
  keywords: "",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: ["./favicon.ico"],
    shortcut: ["./favicon.ico"],
    apple: ["./apple-touch-icon.png"],
  },
  openGraph: {
    title: "Brodskiy Exchange",
    description: "",
    url: "",
    siteName: "Brodskiy Exchange",

    locale: "ru_RU",
    type: "website",
  },

  alternates: { canonical: "" },
};

export default function Home() {
  return (
    <>
      <PrevieBlock />
      <CourseModuleMobile />
      <WhyUsBlock />
      <OfficeBlock />
      <ManagerBlock />
      <GuaranteesBlock />
      <GuideBlock />
      <DealBlock />
      {/* <NetBlock /> */}
      <FaqBlock />
      <ConnectionBlock />
    </>
  );
}
