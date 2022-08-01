import styled from 'styled-components';

import PeopleView from 'features/PeopleView';
import PlanetsView from 'features/PlanetsView';

// Images
import BackgroundImg from 'assets/images/background.jpg';

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${BackgroundImg});
`;

const App = () => (
  <Wrapper>
    <PeopleView />
    <PlanetsView />
  </Wrapper>
);

export default App;
