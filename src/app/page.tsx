import { CourseModuleMobile } from "@/components/course/CourseModuleMobile";
import { GuaranteesBlock } from "@/components/home/guarantees-block/GuaranteesBlock";
import { GuideBlock } from "@/components/home/guide-block/GuideBlock";
import { ManagerBlock } from "@/components/home/manager-block/ManagerBlock";
import { OfficeBlock } from "@/components/home/office-block";
import { PrevieBlock } from "@/components/home/previe-block";
import { WhyUsBlock } from "@/components/home/why-us-block";

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
    </>
  );
}
