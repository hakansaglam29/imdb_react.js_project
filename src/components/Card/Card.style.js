import styled from "styled-components";


export const StyledCardWrapper = styled.div`
    border: 0.0625rem solid red;
    border-radius: 20px;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0.1,0.1,0.1,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background:crimson;
    overflow:hidden; 
`;

export const StyledText = styled.p`
    color: white;
    width:100%;
    height:40px;
    font-size: 1.3rem;
    font-weight:bold;
`;


export const StyledImage = styled.img`
    width:100%;
    height:400px;
`;


export const Styledowerview = styled.p`
    color: white;
    font-weight:500;
    width:92.7%;
    height:auto;
    font-size: 0.7em;
    text-align:justify;
    padding:10px;
    position:absolute;
    bottom:3px;
    background-color:rgb(0,0,0,0.8);
    display: hidden block;
    border:1px solid black;
    margin:auto;
    border-radius: 4px;
`;


export const Relativdiv = styled.div`
    position:relative;
`;

export const RelativdivTitle = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    
`;
export const Show = styled.a`
  border: none;
  padding:0;
  text-decoration: none;
  display: inline-block;
  background:transparent;
  cursor: pointer;
`;

export const Styledp= styled.p`
 padding:2px;
 margin:0;
`;