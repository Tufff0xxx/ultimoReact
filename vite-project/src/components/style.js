import styled from "styled-components";

export const HeaderContainer = styled.div`

    display:flex;
    justify-content:space-around;
    align-items:center;
    max-width:1200px;
    margin:0 auto;
    padding: 25px;
    gap:30px;
    h1{
        margin-top:2rem;
        text-align:center
    }
    p{
        text-align:center;
    }
    @media (max-width:1000px) {
            flex-direction:column
    }

`

export const HeaderTextContainer = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width:50%;
    padding-left:50px;
    
    h1{
        font-size:3.5rem;
        margin:10px;
    }
    h2{
        font-size:2rem;
        margin:10px;
    }
    @media (max-width:1000px) {
            
            width:80%;
            align-items:center;
            text-align:center;
    }

`

export const HeaderImageContainer = styled.div`

img{
    border-radius:30px;
    width:500px;
    height:350px;
}    

@media (max-width:1000px) {
    display:none;
    
}

`