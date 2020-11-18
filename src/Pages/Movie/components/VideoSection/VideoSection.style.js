import styled from "styled-components";

export const VideoDiv = styled.div`
 padding: 20px;
  background-color: rgb(255, 146, 146);
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:6px solid #ee6c6c;

    
`;

export const StyledIframe = styled.iframe`
   border-color: white;
    border-radius: 20px;
    @media (max-width: 420px) {
    height: 180px;
  };
    
`;

