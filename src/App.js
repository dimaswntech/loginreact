import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Logincom from "./components/login/Logincon";
import Theme from "./Theme";


// const themeDark = createTheme({
//   palette: {
//     background: {
//       default: "#876445"
//     },
//     text: {
//       primary: "#ffffff"
//     }
//   }
// });

function App() {
  const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  // const [light, setLight] = React.useState(themeDark);
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Logincom />
      </ThemeProvider>
    </div>
  );
}

export default App;
