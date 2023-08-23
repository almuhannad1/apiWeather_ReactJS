import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// MATERIAL UI COMPONENT
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Button from "@mui/material/Button";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* Content Cintainer */}
          <div
            dir="rtl"
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Card */}
            <div
              style={{
                width: "100%",
                background: "rgb(28 52 91 / 36%",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px rgba(0,0,0,0.05)",
              }}
            >
              {/* Content */}
              <div>
                {/* City & Time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                  }}
                  dir="rtl"
                >
                  <Typography
                    variant="h2"
                    style={{ marginRight: "20px", fontWeight: "600" }}
                  >
                    مسقط
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    الإثنين 21-8-2023
                  </Typography>
                </div>
                {/* === City & Time === */}
                <hr />

                {/* Container of degree + Cloud icon */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* Degree & Description */}
                  <div>
                    {/* Temp */}
                    <div>
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        38
                      </Typography>

                      {/* TODO: Temp Image */}

                      <Typography variant="h6">broken clouds</Typography>

                      {/* Min &  Max */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <h5>الصغرى: 34</h5>
                        <h5 style={{ margin: "0px 5px" }}> | </h5>
                        <h5>الكبرى: 40</h5>
                      </div>
                      {/* === Min &  Max === */}
                    </div>
                    {/* === Temp === */}
                  </div>
                  {/* === Degree & Description === */}

                  <CloudQueueIcon
                    style={{ fontSize: "200px", color: "white" }}
                  />
                </div>
                {/* === Container of degree + Cloud icon === */}
              </div>
              {/* === Content === */}
            </div>
            {/* === Card === */}

            {/* Translation Container */}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Button style={{ color: "white" }} variant="text">
                English
              </Button>
            </div>
            {/* === Translation Container === */}
          </div>
          {/* === Content Cintainer === */}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
