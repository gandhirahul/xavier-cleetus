import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "./styles";
import Root from "./Root";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Root />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
