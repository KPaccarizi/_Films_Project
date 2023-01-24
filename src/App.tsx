import { Box } from "@mui/material";
import { Main } from "./components/layout/Main";
import { Sidebar } from "./components/layout/Sidebar";
import { Theme } from "./components/layout/Theme";

import { Routes } from "./routes/Routes";

function App() {
  return (
    <Theme>
      <Box sx={{ display: "flex" }}>
        <Sidebar />

        <Main>
          <Routes />
        </Main>
      </Box>
    </Theme>
  );
}

export default App;
