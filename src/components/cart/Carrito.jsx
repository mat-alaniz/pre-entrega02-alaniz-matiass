import React from 'react'
import { useCart } from '../useContext/cartContext';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const { cart, removeItem } = useCart();

    // en caso de que el carrito esté vacío
    if (cart.length === 0) {
        return (
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to={`/`} className="producto-link">Volver a la tienda</Link>
            </div>
        );
    }

    // en caso de que el carrito tenga productos
    return (
        <div>
            <h1>Carrito</h1>
            {cart.map(item => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: {item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Carrito