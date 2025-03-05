import { NameSection } from "@/components/name-section";
import { UsList } from "./ui/UsList";

export function WhyUsBlock() {
  return (
    <section className="mt-[60px]">
      <NameSection name="Почему мы?" subTitle="Почему клиенты выбирают нас?" />
      <UsList />
    </section>
  );
}
