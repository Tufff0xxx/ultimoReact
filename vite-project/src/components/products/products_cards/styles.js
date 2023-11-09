import styled from "styled-components";
import { motion } from "framer-motion";
export const CardConteiner = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    h2{margin: 5px}
    p{
        margin:5px;
    }

` 

export const ButtonContainer = styled(motion.div)`


  background-color: pink;
  border: 2px red;
  border-radius: 5px;
  color: white;
  padding: 10px;
  background-color:red;
  box-shadow: 0px 0px 5px 5px black;
  cursor: pointer;

`