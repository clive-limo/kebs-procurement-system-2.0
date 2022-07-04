import {
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import type { FC } from 'react';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';

import ProcurementItemsList from '@/components/ProcurementItemsList';
import QuarterlyAnalysisList from '@/components/QuarterlyAnalysisList';

ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const DashboardContainer: FC = () => {
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'March', 'April'],
    datasets: [
      {
        label: 'First Quater',
        data: [50, 74, 32, 50],
        backgroundColor: '#E7A449',
        tension: 0.4,
      },
    ],
  });

  return (
    <section>
      <QuarterlyAnalysisList />
      <div className="flex flex-row">
        <div className="ml-5 mr-1 w-[30vw] rounded-2xl border border-light-primary">
          <p className="px-5 pt-3 text-[16px] font-semibold text-light-primary ">
            Monthly Analysis
          </p>
          <Line data={chartData} />
        </div>
        <div className="ml-1 w-[47vw] rounded-2xl border border-light-primary">
          <p className="px-5 pt-3 text-[16px] font-semibold text-light-primary ">
            Procurement Items
          </p>
          <ProcurementItemsList />
        </div>
      </div>
    </section>
  );
};

export default DashboardContainer;
