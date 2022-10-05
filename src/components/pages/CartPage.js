import { Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../CartItem';
import Layout from '../layout/Layout';
import { emptyCart, removeFromCart } from '../../redux-state/cartSlice';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  // const onRemoveFromCart = () => {
  //   dispatch(removeFromCart());
  // };

  return (
    <Layout>
      <Box
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb={6}
      />
      {cart.map((cartItem) => (
        <Box mb={3} key={cartItem.id}>
          <CartItem cartItem={cartItem} removeFromCart={removeFromCart} />
        </Box>
      ))}
      <Box mt={5}>
        <Box mb={3}>
          <Button fullWidth variant="contained">Checkout</Button>
        </Box>
        <Box mb={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => { dispatch(emptyCart(cart)); }}
          >
            Empty Cart
          </Button>
        </Box>
        <Box mb={3}>
          <Link to="/">
            <Button
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}

export default CartPage;
