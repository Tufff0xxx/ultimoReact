import styled from "styled-components"


export const CategoriasWrapper = styled.div`

display:flex;
flex-direction:column;

max-width:1300px;
margin: 0 px;
width:100%;

@media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
}

`
export const CategoriasTitle = styled.div`

display:flex;
flex-direction:column;
align-items:center;
text-align:center;
width:100%;
max-width:1300px;
background-color:red;
margin-left:22px;


@media (max-width:768px) {
    padding-top: 30px;
    text-align: center;
}

`

export const CategoriasContainer = styled.div`

    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    gap:20px;
    
    @media (max-width:768px) {
        padding-top:30px;
        text-align:center;
    }

`