import React from 'react'
import { ButtonContainer, CardConteiner } from './styles'
export const ProductsCards = ({img, title, desc, price}) => {
  return (
    <CardConteiner>

        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        <div>
            <p>${price}</p>
            <ButtonContainer whileTap={{scale:0.95}}>
            
                Agregar
            </ButtonContainer>
            
            
            
        </div>
    </CardConteiner>
  )
}
