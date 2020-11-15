import styled from "styled-components";

export const CardWrapper = styled.div`
text-align: center;
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 20px;
  padding: 10px;
  background-color: #dd556c48;
  justify-content:center;
  @media (max-width: 1260px) {
    grid-template-columns: 300px 300px 300px;
  };
  @media (max-width: 960px) {
    grid-template-columns: 300px 300px;
  };
  @media (max-width: 610px) {
    grid-template-columns: 320px;
  };
`;

export const StyledPagination = styled.div`
  background-color:  rgb(201, 17, 17);
  width:100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom:6px solid #f02121;
  position: sticky;
  top: 55px;
  z-index:1;
`;