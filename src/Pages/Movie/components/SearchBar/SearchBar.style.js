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
  top: 37px;
  z-index:1;
`;

export const StyledInput = styled.input`
   width: 400px;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid darkred;
  background-color: rgb(255, 255, 255);
  @media (max-width: 476px)  {
    width: 80%;
  } 
`;

