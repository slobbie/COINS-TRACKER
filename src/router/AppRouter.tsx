import { Route, Routes } from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';

const AppRouter = () => {
  return (
    <Routes>
      <Route path=':coinId' element={<Coin />} />
      <Route path='/' element={<Coins />} />
    </Routes>
  );
};

export default AppRouter;
