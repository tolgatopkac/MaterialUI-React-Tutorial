import {
  PaletteColorOptions,
  PaletteColor,
  ThemeOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }

  interface ThemeOptions {
    status: { danger: React.CSSProperties["color"] };
  }
  interface Palette {
    neutral?: PaletteColor;
  }
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface PaletteColor {
    darker?: string;
  }
}

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.d.ts
