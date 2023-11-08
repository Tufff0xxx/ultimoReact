import React from 'react'
import { CardConteiner } from './styles'
export const ProductsCards = ({img, title, desc, price}) => {
  return (
    <CardConteiner>

        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <button>Agregar</button>
        </div>
    </CardConteiner>
  )
}
