import styled from 'styled-components';

const Coins = () => {
  const Title = styled.h1`
    color: ${(props) => props.theme.accentColor};
  `;
  return (
    <div>
      <Title>coins</Title>
    </div>
  );
};

export default Coins;
