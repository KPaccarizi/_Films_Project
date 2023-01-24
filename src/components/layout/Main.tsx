import React from "react";
import { Box } from "@mui/material";

export const Main: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {props.children}
    </Box>
  );
};
