import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'


const ItemListContainer = ({Data}) => {
    const {categoryId} = useParams();
    
    const [filtro , setFiltro] = useState([]);

    useEffect(()=>{
        if(categoryId){
            const filtros = Data.filter(item => item.category === categoryId);
            setFiltro(filtros);
        }
    else{
        setFiltro(Data);
    }

    },[categoryId, Data]);

    return (
        <div className="item-list-container">
            <h1 className="title">Lista de productos {categoryId && `- ${categoryId}`}</h1>
            <div className="items">
                {filtro.map((item, index) => {
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
