import { Route, Routes } from 'react-router-dom';
import Coin from './Coin';
import Coins from './Coins';

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

const AppRouter = ({ toggleDark, isDark }: IRouterProps) => {
  return (
    <Routes>
      <Route path=':coinId/*' element={<Coin isDark={isDark} />} />
      <Route path='/' element={<Coins toggleDark={toggleDark} />} />
    </Routes>
  );
};

export default AppRouter;
