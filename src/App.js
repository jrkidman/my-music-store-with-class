import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './resetStyles.css';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CustomThemeProvider from './CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import UserContextProvider from './context/UserContext';
import ShoppingCartContextProvider from './context/shoppingCartContext';

function App() {
  return (
    <CustomThemeProvider>
      <UserContextProvider>
        <ShoppingCartContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<SignInPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
        </ShoppingCartContextProvider>
      </UserContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
