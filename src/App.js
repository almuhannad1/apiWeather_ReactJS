import "./App.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h1" gutterBottom>
          السلام عليكم ورحمه الله بركاته
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
