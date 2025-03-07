import { moveTo } from "../../helpers/scrollAnimation";

export function NavMenu() {
  return (
    <nav className="flex items-center lg:gap-[32px] font-medium text-[14px] leading-[19px] ">
      <button
        onClick={() => moveTo("course-section")}
        className="px-[15px] lg:px-[30px]"
      >
        Курс
      </button>
      <button
        onClick={() => moveTo("offices-section")}
        className="px-[15px] lg:px-[30px]"
      >
        Офисы
      </button>
      <button
        className="px-[15px] lg:px-[30px]"
        onClick={() => moveTo("guarantees-section")}
      >
        Гарантии
      </button>
    </nav>
  );
}
