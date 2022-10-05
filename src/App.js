import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './resetStyles.css';
import { Provider } from 'react-redux';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CustomThemeProvider from './CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import store from './redux-state/store';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<SignInPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>

  );
}

export default App;
