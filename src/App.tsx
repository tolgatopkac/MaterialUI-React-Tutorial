import "./App.css";
import {
  createTheme,
  colors,
  ThemeProvider,
  ThemeOptions,
} from "@mui/material";
import MuiButton from "./components/MuiButton";
import MultiTypography from "./components/MultiTypography";
import MultiTextField from "./components/MuiTextField";
import MuiSelect from "./components/MuiSelect";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiSwitch from "./components/MuiSwitch";
import MuiRating from "./components/MuiRating";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";
import MuiAccordion from "./components/MuiAccordion";
import MuiImageList from "./components/MuiImageList";
import MuiNavbar from "./components/MuiNavbar";
import MuiLink from "./components/MuiLink";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiDrawer from "./components/MuiDrawer";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiAvatar from "./components/MuiAvatar";
import MuiBadge from "./components/MuiBadge";
import MuiList from "./components/MuiList";
import MuiChip from "./components/MuiChip";
import MuiTooltip from "./components/MuiTooltip";
import MuiTable from "./components/MuiTable";
import MuiAlert from "./components/MuiAlert";
import MuiSnackbar from "./components/MuiSnackbar";
import MuiDialog from "./components/MuiDialog";
import MuiProgress from "./components/MuiProgress";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiTabs from "./components/MuiTabs";
import MuiTimeline from "./components/MuiTimeline";
import MuiMasonry from "./components/MuiMasonry";
import MuiResponsives from "./components/MuiResponsives";
import MuiCustomizingTheme from "./components/MuiCustomizingTheme";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MuiTabs />
      <MuiSkeleton />
      <MuiLoadingButton />
      <MuiResponsives />
      <MultiTypography />
      <MuiMasonry />
      <MuiButton />
      <MultiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiTimeline />
      <MuiRating />
      <MuiAutocomplete />
      <MuiLayout />
      <MuiCard />
      <MuiAccordion />
      <MuiImageList />
      <MuiLink />
      <MuiBreadcrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiAlert />
      <MuiSnackbar />
      <MuiDialog />
      <MuiProgress />
      <ThemeProvider theme={theme}>
        <MuiCustomizingTheme />
      </ThemeProvider>
      <MuiBottomNavigation />
    </div>
  );
}

export default App;
