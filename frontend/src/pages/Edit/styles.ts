import styled from "styled-components";

export const Container = styled.div`
  /* padding-left: 80px; */
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: greenyellow;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding-left: 0px;
  }
`;
