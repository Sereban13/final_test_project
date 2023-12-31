import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import {
  Container,
  TitleContainer,
  CaloriesTitle,
  CaloriesDesc,
  ChartsContainer,
} from './Calories.styled';

const CaloriesDash = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: false,
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
      y: {
        position: 'left',
        ticks: {
          beginAtZero: true,
          stepSize: 1000,
          callback: function (value) {
            if (value >= 1000) {
              return (value / 1000).toLocaleString() + 'K';
            }
            return value;
          },
        },
        grid: {
          display: true,
          color: '#292928',
          borderColor: '#292928',
        },
      },
    },
    layout: {
      padding: {
        left: 14,
        right: 31,
        top: 25,
        bottom: 40,
      },
    },
  };

  const labels = [];
  for (let i = 1; i <= 31; i++) {
    labels.push(i);
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 3000 })),
        borderColor: '#e3ffa8',
        backgroundColor: '#0F0F0F',
        pointBackgroundColor: '#e3ffa8',
        borderWidth: 1,
      },
    ],
  };
  return (
    <Container>
      <TitleContainer>
        <CaloriesTitle>Calories</CaloriesTitle>
        <CaloriesDesc>Average value: 1700 cal</CaloriesDesc>
      </TitleContainer>

      <ChartsContainer>
        <Line
          options={options}
          data={data}
          style={{ backgroundColor: '#0F0F0F', borderRadius: '12px' }}
        />
      </ChartsContainer>
    </Container>
  );
};

export default CaloriesDash;
