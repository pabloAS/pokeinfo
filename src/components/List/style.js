import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 3px;

  @media only screen and (max-width: 1644px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 936px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 635px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
