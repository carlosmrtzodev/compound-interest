import styled from "styled-components";
export const Balance = styled.h1`
  color: #2b2d42;
  font-size: 2.4rem;
  font-weight: normal;
`;
export const Button = styled.button`
  border: none;
  outline: none;
  color: #edf2f4;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 0.8rem 4rem;
  margin-bottom: 1.2rem;
  border-radius: 0.4rem;
  transition: all ease 0.3s;
  background-color: #db7093;

  &:hover {
    filter: brightness(1.1);
  }

  @media screen and (max-width: 768px) {
    padding: 0.8rem 2rem;
  }
`;
export const Label = styled.label`
  gap: 0.8rem;
  display: flex;
  color: #2b2d42;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;
export const Inputs = styled.input`
  width: 100%;
  outline: none;
  padding: 0.6rem;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  margin-bottom: 0.4rem;
  background-color: #edf2f4;
  border: solid 0.1rem #8d99ae;
`;
export const Control = styled.div`
  margin-bottom: 1.2rem;
`;
export const ErrorMessage = styled.span`
  color: #db7093;
  font-size: 1.4rem;
  font-weight: bold;
`;
export const Total = styled.span`
  color: #db7093;
  font-weight: bold;
`;
export const ErrorText = styled.p`
  color: #db7093;
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 1.2rem;
`;

export const Icons = styled.span`
  margin-right: 0.8rem;
`;

export const IconsColor = styled.span`
  color: #db7093;
`;
