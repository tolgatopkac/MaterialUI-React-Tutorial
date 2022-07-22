import { Stack, CircularProgress, LinearProgress } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        marginBottom: "20px",
        padding: "20px",
        border: "2px solid blue",
      }}
    >
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};

export default MuiProgress;
