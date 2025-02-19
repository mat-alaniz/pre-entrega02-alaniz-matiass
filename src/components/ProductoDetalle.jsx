import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductoDetalle.css';

const ProductoDetalle = ({ Data }) => {
  const { id } = useParams();
  const [product , setProduct] = useState(null);//variable de estado.
  
  useEffect(() => { 
    const productos = Data.find(item => item.id === parseInt(id));
    setProduct(productos);
  }, [id, Data]);
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="producto-detalle">
      <h1 className="producto-titulo">{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p className="producto-descripcion">{product.description}</p>
      <p className="producto-precio">{product.price}</p>
      <Link to={`/`} className="producto-link">Volver</Link>
    </div>
  );
};

export default ProductoDetalle;