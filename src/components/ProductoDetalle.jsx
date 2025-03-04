import {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductoDetalle.css';
import { useCart } from './useContext/cartContext';

const ProductoDetalle = ({ Data }) => {
  const { id } = useParams();
  const [product , setProduct] = useState(null);//variable de estado.
  const {addItem}= useCart();
  
  useEffect(() => { 
    const productos = Data.find(item => item.id === parseInt(id));
    setProduct(productos);
  }, [id, Data]);
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const handlerAddToCart = () => {
    if(product){
      addItem(product);
      alert('Producto agregado al carrito');
    }

  }

  return (
    <div className="producto-detalle">
      <h1 className="producto-titulo">{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p className="producto-descripcion">{product.description}</p>
      <p className="producto-precio">{product.price}</p>
      <button className='btn-addcart'onClick={handlerAddToCart}>Agregar al carrito</button>
      <Link to={`/`} className="producto-link">Volver</Link>
    </div>
  );
};

export default ProductoDetalle;