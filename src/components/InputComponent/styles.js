import styled from 'styled-components';

export const Input = styled.input`
  background-size: 20px 52px;
  padding-left: 40px;
  width: 100%;
  height: 50px;
  border: none;
  :focus,
  input:focus {
    outline: none;
  }
  ::placeholder {
    color: #767676;
    font-weight: 300;
    opacity: 1;
  }
`;
