"use client";
import { NameSection } from "@/components/name-section";
import { Map } from "./ui/Map";
import { Offices } from "./ui/Offices";

export function OfficeBlock() {
  return (
    <section className="mb-[144px]">
      <NameSection
        name="Офисы"
        subTitle="Наши офисы находятся в разных частях света. Ознакомьтесь с полным списком ниже."
      />
      <Map />
      <Offices />
    </section>
  );
}
