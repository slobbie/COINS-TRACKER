import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

interface RouterState {
  name: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Coin = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { coinId } = useParams<string>();
  const location = useLocation();

  const name = location.state as RouterState;

  return (
    <Container>
      <Header>
        <Title>{name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader> Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
