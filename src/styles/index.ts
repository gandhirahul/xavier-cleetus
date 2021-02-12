import styled, { createGlobalStyle } from "styled-components";

export const AppContainer = styled.div`
  background-color: white;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #1da1f2;
  color: white;
  padding: 24px;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F6F2F1;
    font-size: 1.6rem;
  }
`;
