import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import Price from './Price';

// https://apexcharts.com

interface ChartProps {
  coinId: string;
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

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<Ihistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
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
              mode: 'dark',
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
            },
            stroke: {
              curve: 'smooth',
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
