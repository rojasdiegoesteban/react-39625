import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CardProduct = ({product}) => {
  return (
    <Card sx={{maxWidth: 360}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.imagen}
          alt={product.modelo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center' sx={{mt:1.5}}>
            {product.marca}
          </Typography>
          <Typography variant="body2" color="text.secondary" align='center'>
            {product.modelo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/detail/${product.id}`} fullWidth variant="contained" size="small">Detalle</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
export default CardProduct;