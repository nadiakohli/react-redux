import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchPeople } from '../reducers/people';

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

const PeopleView = () => {
  const people = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
  }, []);

  return (
    <Wrapper>
      <H2>List of People (slice)</H2>
      {people.loading && <div>Loading...</div>}
      {!people.loading && people.error ? <div>Error: {people.error}</div> : null}
      {!people.loading && people.people.length ? (
        <ul>
          {people.people.map((person) => (
            <li key={person.url}>{person.name}</li>
          ))}
        </ul>
      ) : null}
    </Wrapper>
  );
};

export default PeopleView;
