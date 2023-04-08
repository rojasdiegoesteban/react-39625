import React from 'react'
import CardProduct from '../CardProduct'
import Grid from '@mui/material/Grid';

const CardList = ({ productos }) => {
  return (
    <div className='card-list' style={{ margin: '2rem 3rem 0 3rem' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12}}>
        {productos.map((producto) => (
          <Grid item xs={2} sm={4} md={3} key={producto}>
            <CardProduct product={producto} key={producto.id} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CardList