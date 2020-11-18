import styled from "styled-components";

export const StyledDiv = styled.div`
   text-align: center;
  padding-top: 10px;
  background-color: rgb(201, 17, 17);
  width:100%;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: -10px;
  z-index:1;
`;

export const StyledLink = styled.a`
    width: 100px;
  padding: 10px;
  
  @media (max-width: 476px)  {
    width: 80%;
    
  } 
`;
