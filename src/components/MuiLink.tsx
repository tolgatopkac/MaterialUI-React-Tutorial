import React from "react";
import { Stack, Link, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      m={4}
      sx={{
        marginBottom: "20px",
        padding: "20px",
        border: "2px solid blue",
      }}
    >
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Hover
      </Link>
      <Link href="#" color="secondary" variant="body2">
        variantBody2Link
      </Link>
    </Stack>
  );
};

export default MuiLink;
