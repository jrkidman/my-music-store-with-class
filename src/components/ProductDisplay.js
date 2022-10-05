import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux-state/cartSlice';

function ProductDisplay(props) {
  const { productData } = props;
  const dispatch = useDispatch();

  // const onAddToCart = (productData) => {
  //   dispatch(addToCart(productData));
  // };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={productData.title}
        subheader={productData.brand}
      />
      <CardMedia
        component="img"
        height="294"
        image={productData.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width={1}>
          <Button onClick={() => { dispatch(addToCart(productData)); }}>Add to cart</Button>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
