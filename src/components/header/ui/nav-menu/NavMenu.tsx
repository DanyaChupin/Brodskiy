import Link from "next/link";

export function NavMenu() {
  return (
    <nav className="flex items-center lg:gap-[32px] font-medium text-[14px] leading-[19px] ">
      <Link className="px-[15px] lg:px-[30px]" href="/">
        Курс
      </Link>
      <Link className="px-[15px] lg:px-[30px]" href="/">
        Офисы
      </Link>
      <Link className="px-[15px] lg:px-[30px]" href="/">
        Гарантии
      </Link>
    </nav>
  );
}
