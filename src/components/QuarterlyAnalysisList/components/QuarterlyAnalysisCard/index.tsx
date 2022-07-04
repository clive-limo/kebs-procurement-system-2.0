import type { FC } from 'react';

interface Iprops {
  quater: string;
  start_month: string;
  end_month: string;
  total_budget: string;
}
const QuarterlyAnalysisCard: FC<Iprops> = ({
  quater,
  start_month,
  end_month,
  total_budget,
}) => {
  return (
    <div className=" m-5 flex flex-1 flex-row rounded-xl bg-dark-primary p-3 shadow-md">
      <img
        src="/assets/icons/ic-clock.svg"
        alt="clock-icon"
        className="mt-2 h-[50px] w-[50px]"
      />
      <div>
        <p className="px-2 pt-1 text-[24px] font-semibold text-white ">
          {quater}
        </p>
        <p className="px-2 text-[13px] font-light text-gray-400">
          {start_month} - {end_month}
        </p>
        <p className="px-2 pt-2 text-[34px] font-thin text-orange-400 ">
          $ {total_budget}
        </p>
      </div>
    </div>
  );
};

export default QuarterlyAnalysisCard;
