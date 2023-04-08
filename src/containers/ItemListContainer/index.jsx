import React, { useEffect, useState } from 'react'
import productosJson from '../../data/products.json';
import CardList from '../../components/CardList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  //Capturo la marca por la que quiero filtrar
  const { marcaId } = useParams();
  //Capturo genero por el que quiero filtrar
  const { generoId } = useParams();

  useEffect(() => {

    const obtenerProductos = new Promise((acc, rec) => {
      setTimeout(() => {
        acc(productosJson);
      }, 1000);
    });

    obtenerProductos
      .then((products) => {
        //filtramos en base a marcaId
        if (marcaId) {
          const productosFiltradosPorMarca = products.filter(producto => producto.marca === marcaId)
          setProducts(productosFiltradosPorMarca);
        }
        else if (generoId) {
          const productosFiltradosPorGenero = products.filter(producto => producto.genero === generoId)
          setProducts(productosFiltradosPorGenero);
        }
        else {
          setProducts(products);
        }

      })
      .catch((err) => {
        alert(err.message);
      });

  }, [marcaId, generoId])


  return (
    <CardList productos={products} />
  )
}

export default ItemListContainer