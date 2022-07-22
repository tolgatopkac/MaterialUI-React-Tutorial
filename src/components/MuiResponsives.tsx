import React from "react";
import { Box, Typography } from "@mui/material";

const MuiResponsives = () => {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100, // 0
          sm: 200, // 600
          md: 300, // 900
          lg: 400, // 1200
          xl: 500, // 1536
        },
        bgcolor: "primary.main",
      }}
    >
      <Typography>Responsive Box</Typography>
    </Box>
  );
};

export default MuiResponsives;
