import { Typography, Box } from "@mui/material";

const MultiTypography = () => {
  // Component elementi etiketini değiştirir, semantic için önemlidir fakat stilini etkilemez.
  return (
    <Box
      sx={{
        marginBottom: "20px",
        padding: "20px",
        border: "2px solid blue",
      }}
    >
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="subtitle2">Sub title 2</Typography>

      {/* body1 default variant for typography */}
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        natus?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, illum!
      </Typography>
    </Box>
  );
};

export default MultiTypography;
