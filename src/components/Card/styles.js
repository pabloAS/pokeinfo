import styled from "styled-components";

export const Container = styled.div`
  background: #6096ba;
  height: 250px;
  width: 300px;
  border-radius: 10px;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #274c77;
    color: #f1f1f1;
    height: 50px;

    header {
      margin-left: 10px;
      svg {
        &:hover {
          transition: 0.3s;
          color: #6096ba;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;

    img {
      height: 100px;
      width: 100px;
      border-radius: 50px;
      border: 2px solid #274c77;
    }
  }

  &:hover {
    img {
      height: 150px;
      width: 150px;
      border: 2px solid #6096ba;
      transition: 0.9s;
      cursor: help;
    }
    background: #274c77;
    transition: 0.9s;
  }
`;
