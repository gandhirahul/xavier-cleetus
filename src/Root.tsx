import React, { memo } from "react";
import App from "./App";
import { Header, AppContainer } from "./styles";

export const Root = () => {
  return (
    <>
      <Header>Twitter</Header>
      <AppContainer>
        <App />
      </AppContainer>
    </>
  );
};

export default memo(Root);
