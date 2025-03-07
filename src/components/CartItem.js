import {
  Card, CardMedia, Box, Typography, IconButton,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux-state/cartSlice';

function CartItem(props) {
  const { cartItem } = props;
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Card>
      <Box display="flex" width="100%">
        <Box>
          <CardMedia
            component="img"
            sx={{ width: 80, height: 80, p: 1 }}
            image={cartItem.image}
          />
        </Box>
        <Box px={2} display="flex" flexDirection="column" flexGrow={1} justifyContent="center">
          <Box>
            <Typography fontWeight="bold">
              {cartItem.title}
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold">

              $
              {cartItem.price / 100}
            </Typography>
          </Box>
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center">
          <Typography fontWeight="bold">
            x
            {cartItem.quantity}
          </Typography>
        </Box>
        <Box px={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <IconButton onClick={() => {
            dispatch(removeFromCart(cartItem.id));
          }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default CartItem;
