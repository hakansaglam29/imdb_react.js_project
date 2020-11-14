import styled from "styled-components";

export const CardListWrapper = styled.div`
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