"use client";
import { useBreakPoints } from "@/shared/hooks/useBreackPoints";
import { MediaLinks } from "./ui/media-links/MediaLinks";
import { Burger } from "./ui/burger/Burger";
import { NavMenu } from "./ui/nav-menu/NavMenu";
import { PrimaryButton } from "@/shared/ui/buttons";
import { CompanyIcon } from "@/shared/ui/icons/CompanyIcon";
import "./styles/border-color.css";

export function Header() {
  const { isMobile } = useBreakPoints();
  return (
    <header className="bg-[#1A191D] bg-opacity-90 z-50 w-full left-0 custom-border backdrop-blur-[5px] fixed top-0 rounded-b-[24px] md:rounded-none px-[24px] h-[80px] md:h-[73px]">
      <div className="max-w-[1440px] relative z-40 justify-between mx-auto text-[13px] flex items-center h-full">
        <CompanyIcon />
        {isMobile ? (
          <div className="md:hidden flex items-center gap-[29px]">
            <MediaLinks />
            <Burger />
          </div>
        ) : (
          <div className="hidden animate-fadeIn md:items-center md:flex gap-[40px]">
            <NavMenu />
            <MediaLinks />
            <PrimaryButton
              padding="px-[29px] py-[11px]"
              href="/"
              text="Оставить заявку"
            />
          </div>
        )}
      </div>
    </header>
  );
}
