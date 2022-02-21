import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import Price from './Price';

// https://apexcharts.com

interface ChartProps {
  coinId: string;
  isDark: boolean;
}

interface Ihistorical {
  time_open: string;
  time_close: string;
  open: Number;
  high: Number;
  low: Number;
  close: Number;
  volume: Number;
  market_cap: Number;
}

const Chart = ({ coinId, isDark }: ChartProps) => {
  const { isLoading, data } = useQuery<Ihistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <div>
      {isLoading ? (
        'Loading chart'
      ) : (
        <ApexChart
          type='line'
          series={[
            {
              name: 'Price',
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              height: 300,
              width: 500,
              background: 'transparent',
              toolbar: {
                show: false,
              },
            },
            grid: { show: false },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: 'datetime',
              categories: data?.map((data) => data.time_close),
            },
            stroke: {
              curve: 'smooth',
            },
            fill: {
              type: 'gradient',
              gradient: {
                gradientToColors: ['#44bd32'],
                stops: [0, 100],
              },
            },
            colors: ['#0097e6'],
            tooltip: {
              y: {
                formatter: (value) => `${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
