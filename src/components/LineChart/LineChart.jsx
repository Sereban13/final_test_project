import { Line } from 'react-chartjs-2';
import faker from 'faker';

const LineChartComponent = ({ options, data }) => {
  return <Line options={options} data={data} />;
};

export default LineChartComponent;
