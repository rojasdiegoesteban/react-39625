import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productosJson from '../../data/products.json';
import CardDetail from '../../components/CardDetail';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({});
    //Capturo el Id por el que quiero filtrar
    const {detailId} = useParams();

    useEffect(() => {
        const obtenerProducto = new Promise((acc, rec) => {
            setTimeout(() => {
                acc(productosJson);
            }, 1000);
        });

        obtenerProducto
            .then(productos => {
                //filtramos en base al Id
                if(detailId) {
                    const detalleProducto = productos.find(producto => producto.id.toString() === detailId);
                    setDetail(detalleProducto);
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    },[detailId])



  return (
    <CardDetail detail={detail} />
  )
}

export default ItemDetailContainer