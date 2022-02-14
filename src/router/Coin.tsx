import { useParams } from 'react-router-dom';

const Coin = () => {
  const { coinId } = useParams<string>();

  return (
    <div>
      <h1>coin: {coinId}</h1>
    </div>
  );
};

export default Coin;
