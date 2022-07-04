import { collection, getDocs } from 'firebase/firestore';
import { firestoreRef } from 'firebase_config/firebaseInit';
import type { FC } from 'react';
import { useState } from 'react';

import QuarterlyAnalysisCard from './components/QuarterlyAnalysisCard';

const QuarterlyAnalysisList: FC = () => {
  const [quatersData, setQuatersData] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const getSupplies = async () => {
    const dataSnapshot = await getDocs(collection(firestoreRef, 'supplies'));
    let firstQuater = 0;
    let secondQuater = 0;
    let thirdQuater = 0;
    let fourthQuater = 0;
    dataSnapshot.forEach((doc) => {
      const date = doc.data().supplyDate;
      const dateSplit = date.split('-');
      if (
        Number.parseInt(dateSplit[1], 10) === 1 ||
        Number.parseInt(dateSplit[1], 10) === 2 ||
        Number.parseInt(dateSplit[1], 10) === 3
      ) {
        firstQuater += doc.data().supplyAmount;
      } else if (
        Number.parseInt(dateSplit[1], 10) === 4 ||
        Number.parseInt(dateSplit[1], 10) === 5 ||
        Number.parseInt(dateSplit[1], 10) === 6
      ) {
        secondQuater += doc.data().supplyAmount;
      } else if (
        Number.parseInt(dateSplit[1], 10) === 7 ||
        Number.parseInt(dateSplit[1], 10) === 8 ||
        Number.parseInt(dateSplit[1], 10) === 9
      ) {
        thirdQuater += doc.data().supplyAmount;
      } else if (
        Number.parseInt(dateSplit[1], 10) === 10 ||
        Number.parseInt(dateSplit[1], 10) === 11 ||
        Number.parseInt(dateSplit[1], 10) === 12
      ) {
        fourthQuater += doc.data().supplyAmount;
      }
    });

    const numberWithCommas = (x: number) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    setQuatersData({
      first: numberWithCommas(firstQuater),
      second: numberWithCommas(secondQuater),
      third: numberWithCommas(thirdQuater),
      fourth: numberWithCommas(fourthQuater),
    });
  };

  getSupplies();
  return (
    <section>
      <div className="flex w-full flex-row">
        <QuarterlyAnalysisCard
          quater="Q1"
          start_month="Jan"
          end_month="March"
          total_budget={quatersData.first}
        />
        <QuarterlyAnalysisCard
          quater="Q2"
          start_month="April"
          end_month="June"
          total_budget={quatersData.second}
        />
        <QuarterlyAnalysisCard
          quater="Q3"
          start_month="July"
          end_month="Sept"
          total_budget={quatersData.third}
        />
        <QuarterlyAnalysisCard
          quater="Q4"
          start_month="Oct"
          end_month="Dec"
          total_budget={quatersData.fourth}
        />
      </div>
      <div className="flex w-full flex-row">
        <div className="flex-1">
          <p className="px-5 pt-3 text-[16px] font-semibold text-light-primary ">
            Total Procurement Plan Budget
          </p>
          <p className="mx-5 my-2 w-[400px] rounded-md border border-dark-secondary py-2 text-center text-[34px] font-medium text-orange-400 ">
            $ 84,000,000
          </p>
        </div>
        <div className="flex-1">
          <p className="px-5 pt-3 text-[16px] font-semibold text-light-primary ">
            Total Amount Spent
          </p>
          <p className="mx-5 my-2 w-[400px] rounded-md border border-dark-secondary py-2 text-center text-[34px] font-medium text-orange-400 ">
            $ 45,000,000
          </p>
        </div>
        <div className="flex-1">
          <button className="mx-5 my-10 flex w-[350px] flex-row rounded-xl bg-dark-primary p-3">
            <p className="font-[24px] p-3 pl-20 text-center font-semibold text-white">
              View Details
            </p>
            <img src="/assets/icons/ic-details.svg" alt="details icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuarterlyAnalysisList;
