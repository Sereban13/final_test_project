// import MonthsDashboard from '../months/months';

import CaloriesDash from './Calories/Calories';
import WaterDash from './Water/Water';
import WeightDash from './Weight/Weight';

import { DashboardContainer, WeightContainerStyle } from './Dashboard.styled';
import MonthsDash from './Months/Months';

const Dashboard = () => {
  return (
    <div>
      <MonthsDash />
      <DashboardContainer>
        <CaloriesDash />
        <WaterDash />
      </DashboardContainer>
      <WeightContainerStyle>
        <WeightDash />
      </WeightContainerStyle>
    </div>
  );
};

export default Dashboard;
