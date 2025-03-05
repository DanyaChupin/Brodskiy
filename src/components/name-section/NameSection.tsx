type Props = {
  name: string;
  subTitle: string;
};
export function NameSection(props: Props) {
  const { name, subTitle } = props;
  return (
    <div className="flex relative z-40 flex-col items-center gap-[24px] md:gap-0 mb-[40px]">
      <h2 className="font-bold text-[24px] leading-[28px] md:text-[36px] md:leading-[41px]">
        {name}
      </h2>
      <p className="text-[14px] leading-[17px] font-light text-center md:font-normal md:text-[20px] md:leading-[39px]">
        {subTitle}
      </p>
    </div>
  );
}
