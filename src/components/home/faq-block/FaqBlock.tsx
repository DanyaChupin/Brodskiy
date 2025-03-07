import { PrimaryButton } from "@/shared/ui/buttons";
import { FaqItem } from "./ui/FaqItem";
import { TG_LINK } from "@/shared/const/social";

export function FaqBlock() {
  return (
    <section className="self-center items-center flex flex-col mdPlus:gap-[50px] max-w-[1200px] mdPlus:justify-between mdPlus:flex-row w-full mb-[131px] lg:mb-[240px]">
      <h4 className="font-bold text-[24px]  mb-[50px] leading-[28px] mdPlus:hidden">
        FAQ
      </h4>
      <div className="mdPlus:flex-col mdPlus:gap-[5px]  hidden mdPlus:flex mdPlus:self-start mdPlus:mt-[25px] lg:text-[36px] mdPlus:text-[28px] mdPlus:leading-[28px] lg:leading-[41px]">
        <h4 className="font-bold text-[24px] leading-[28px]">FAQ</h4>
        <p className="opacity-70 text-[14px] hidden mdPlus:block">
          Не нашли ответ на вопрос?
        </p>

        <PrimaryButton text="Написать в поддержку" href={TG_LINK} />
      </div>
      <div className="flex flex-col w-full max-w-[685px] gap-[12px] items-center">
        <FaqItem
          title="Насколько чистая у вас криптовалюта?"
          description="Каждая наша транзакция проходит проверку всеми возможными способами по отлеживанию истрии происхождения актива"
        />
        <FaqItem
          title="Какой максимальный обьем сделки?"
          description="Максимального и минимального порога не существует,решим любую задачу"
        />
        <FaqItem
          title="Cкорость оплаты инвойса?"
          description="Прикладываем максимальные усилия к ускорению оплат и стремимся сделать их моментально"
        />
      </div>
      <p className="opacity-70 text-[14px] mt-[48px] mdPlus:hidden mb-[28px] text-center">
        Не нашли ответ на вопрос?
      </p>
      <div className="mdPlus:hidden">
        <PrimaryButton text="Написать в поддержку" href={TG_LINK} />
      </div>
    </section>
  );
}
