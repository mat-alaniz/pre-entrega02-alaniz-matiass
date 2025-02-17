import React, { use } from 'react'
import { useParams } from 'react-router-dom'

const ProductoDetalle = ({ Data }) => {
    console.log(Data)   
  const { id } = useParams()
  const producto = Data.find(producto => producto.id === parseInt(id))


  //en caso de que no exista el Id
    if (!producto) {
        return <div>Producto no encontrado</div>
    }


  return (
    <div>
        <h1>{producto.title}</h1>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
        <img src={producto.image} alt="" />
    </div>

  )
}

export default ProductoDetalle