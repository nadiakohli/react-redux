import { Provider } from 'react-redux';
import styled from 'styled-components';

// Components
import PeopleView from 'components/PeopleView';
import PlanetsView from 'components/PlanetsView';

import store from 'store/store';
import toolkitStore from 'store/toolkitStore';

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
    <Provider store={store}>
      <PlanetsView />
    </Provider>
    <Provider store={toolkitStore}>
      <PeopleView />
    </Provider>
  </Wrapper>
);

export default App;
