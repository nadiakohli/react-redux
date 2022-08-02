import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchPlanets } from 'actions/planets';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 41px;
`;

const PlanetsView = () => {
  const planets = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlanets());
  }, []);

  return (
    <Wrapper>
      <H2>List of Planets (reducer)</H2>
      {planets.loading && <div>Loading...</div>}
      {!planets.loading && planets.error ? <div>Error: {planets.error}</div> : null}
      {!planets.loading && planets.data.length ? (
        <ul>
          {planets.data.map((planet) => (
            <li key={planet.url}>{planet.name}</li>
          ))}
        </ul>
      ) : null}
    </Wrapper>
  )
};

export default PlanetsView;
