import React, { memo } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LoaderContainer } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default memo(Loader);
