import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#019bff",
    },
    secondary: {
      main: "#343a40",
    },
    error: {
      main: "#dc3545",
    },
  },
});

export const Theme: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
