import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CartWidget = () => {
  return (
    <Tooltip title="Carrito de compras">
      <IconButton sx={{ p: 0 }}>
        <ShoppingCartIcon sx={{ mr: 1, fontSize: '2rem', color: 'white' }}/>
      </IconButton>
    </Tooltip>
  )
}

export default CartWidget