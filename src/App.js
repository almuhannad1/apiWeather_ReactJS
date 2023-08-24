/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import { useEffect, useState } from "react";

// MATERIAL UI COMPONENT
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import Button from "@mui/material/Button";

// External Libraries
import axios from "axios";
import moment from "moment/moment";
import "moment/min/locales";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  typography: {
    fontFamily: "IBM",
  },
});

let cancelAxios = null;

function App() {
  const { t, i18n } = useTranslation();

  // States
  const [dateAndTime, setDateAndTime] = useState("");
  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icone: null,
  });
  const [locale, setLocale] = useState("en");
  // === States ===

  const direction = locale === "ar" ? "rtl" : "ltr"
  
  //Event handlers
  function handleLanguageClick() {
    if (locale === "en") {
      setLocale("ar");
      i18n.changeLanguage("ar");
      moment.locale("ar");
    } else {
      setLocale("en");
      i18n.changeLanguage("en");
      moment.locale("en");
    }
    setDateAndTime(moment().format("Do MMMM YYYY"));
  }
  // === Event handlers ===

  // To translate a page.
  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDateAndTime(moment().format("Do MMMM YYYY"));
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=23.61&lon=58.54&appid=286fe928123ae956ba5171a821823268",
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c;
          }),
        }
      )
      .then(function (response) {
        // handle success
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const responseMax = Math.round(response.data.main.temp_max - 272.15);
        const responseMin = Math.round(response.data.main.temp_min - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon;
        setTemp({
          number: responseTemp,
          description: description,
          min: responseMin,
          max: responseMax,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      cancelAxios();
    };
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* Content Cintainer */}
          <div
            dir={direction}
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
                  dir={direction}
                >
                  <Typography
                    variant="h2"
                    style={{ marginRight: "20px", fontWeight: "600" }}
                  >
                    {t("Muscat")}
                  </Typography>

                  <Typography variant="h5" style={{ marginRight: "20px" }}>
                    {/* الإثنين 21-8-2023 */}
                    {dateAndTime}
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h1" style={{ textAlign: "right" }}>
                        {temp.number}
                      </Typography>

                      <img
                        src={"https://openweathermap.org/img/wn/10d@2x.png"}
                      />
                    </div>
                    <Typography variant="h6">{t(temp.description)}</Typography>

                    {/* Min &  Max */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {t("Min")}: {temp.min}
                      </h5>
                      <h5 style={{ margin: "0px 5px" }}> | </h5>
                      <h5>
                        {t("Max")}: {temp.max}
                      </h5>
                    </div>
                    {/* === Min &  Max === */}

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
              <Button
                style={{ color: "white" }}
                variant="text"
                onClick={handleLanguageClick}
              >
                {locale === "en" ? "العربية" : "English"}
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
