import styled from "styled-components"

export const ProductsWrapper = styled.div`


display:flex;
flex-direction:column;
align-items:center;
width:100%;
max-width:1200px;
margin: 0 15px;
@media (max-width:768px) {
    padding-top: 30px;
    display:flex;
    flex-direction:column;
    text-align: center;
}
`

export const ProductsContainer = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width:100%;
    max-width:1200px;
    align-items:center;
    gap:20px;
    img{
        width:300px;
        height:300px;
    }
    @media (max-width:768px) {
        padding-top:30px;
        text-align:center;
        display:flex;
        flex-direction:column;
    }
    @media (max-width:576px) {
        img{
            width:150px;
            height:150px;
            align-items:center;
        }
    }

`
