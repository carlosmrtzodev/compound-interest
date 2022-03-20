import styled from "styled-components";
export const Section = styled.section`
  width: 50%;
  padding: 4rem;
  border-radius: 0.8rem;
  background-color: #edf2f4;
  border-top: solid 2rem #db7093;
  border-bottom: solid 2rem #db7093;
  box-shadow: -10px 3px 50px -2px rgba(0, 0, 0, 0.47);

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    max-width: 512px;
  }
`;
export const Container = styled.div`
  width: 75%;
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ErrorContent = styled.div`
  text-align: center;
`;
