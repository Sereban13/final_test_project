import { Line } from 'react-chartjs-2';
// import faker from 'faker';

const LineChartComponent = ({ options, data }) => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChartComponent;
