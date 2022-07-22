import { Stack, Badge } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
const MuiBadge = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        marginBottom: "20px",
        padding: "20px",
        border: "2px solid blue",
      }}
    >
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={1000} color="primary" showZero max={99}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={5} color="primary" invisible={false}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
