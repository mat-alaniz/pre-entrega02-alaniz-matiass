import React from 'react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'

const ItemListContainer = ({Data}) => {
    console.log(Data)
    return (
        <div className="item-list-container">
            <h1 className="title">Lista de productos</h1>
            <div className="items">
                {Data.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-description">{item.description}</p>
                            <p className="item-price">{item.price}</p>
                            <Link to={`/producto/${item.id}`} className="item-link">Ver detalle</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemListContainer
