import { PrimaryButton } from "@/shared/ui/buttons";
import { FaqItem } from "./ui/FaqItem";

export function FaqBlock() {
  return (
    <section className="self-center items-center flex flex-col mdPlus:gap-[50px] max-w-[1200px] mdPlus:justify-between mdPlus:flex-row w-full mb-[100px]">
      <h4 className="font-bold text-[24px] mb-[50px] leading-[28px] mdPlus:hidden">
        FAQ
      </h4>
      <div className="mdPlus:flex-col mdPlus:gap-[5px] hidden mdPlus:flex mdPlus:self-start mdPlus:mt-[25px] lg:text-[36px] mdPlus:text-[28px] mdPlus:leading-[28px] lg:leading-[41px]">
        <h4 className="font-bold text-[24px] leading-[28px]">FAQ</h4>
        <p className="opacity-70 text-[14px] hidden mdPlus:block">
          Не нашли ответ на вопрос?
        </p>

        <PrimaryButton text="Написать в поддержку" href="/" />
      </div>
      <div className="flex flex-col w-full max-w-[685px] gap-[12px] items-center">
        <FaqItem title="Вопрос 1" description="Ответ 1 информация информация" />
        <FaqItem title="Вопрос 2" description="Ответ 2 информация информация" />
        <FaqItem title="Вопрос 3" description="Ответ 3 информация информация" />
      </div>
      <p className="opacity-70 text-[14px] mt-[48px] mdPlus:hidden mb-[28px] text-center">
        Не нашли ответ на вопрос?
      </p>
      <div className="mdPlus:hidden">
        <PrimaryButton text="Написать в поддержку" href="/" />
      </div>
    </section>
  );
}
