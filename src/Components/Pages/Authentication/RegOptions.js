import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import logo from "../../../img/Group 39875.svg";
import { Link } from "react-router-dom";
import pic1 from "../../../img/pic1.png";
import pic2 from "../../../img/pic2.png";
import pic3 from "../../../img/pic3.png";
import pic4 from "../../../img/Group 39872.svg";

const RegOptions = () => {
  const logoStyle = {
    width: "136.2px",
    height: "191.27px",
  };
  const styles = {
    box1: {
      borderRadius: "8.158px",
      border: "2px solid #0D6EFD",
      width: "170.449px",
      height: "170.297px",
      padding: "9.178px 50.477px",
      background: "#0D6EFD",
      color: "#FFF",
    },
    box2: {
      borderRadius: "8.158px",
      border: "2px solid #0D6EFD",
      background: "#FFF",
      width: "170.449px",
      height: "170.297px",
      padding: "9.178px 50.477px",
      color: "#0D6EFD",
    },
  };

  const img = {
    width: "150%",
    height: "100%",
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 5,
        textAlign: "center",
        fontFamily: "SF UI Display",
        position: "relative", // Ensure the parent container has position set to relative
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          transform: "rotate(360deg)", // Rotate the SVG 180 degrees to flip it upside down
        }}
      >
        <path
          opacity="0.14"
          d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
          fill="#0D6EFD"
        />
      </svg>

      {/* 1st section  */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 5 }}
      >
        <Grid item xs={false} sm={false} md={5} lg={5}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Grid>
        <Grid item xs={12} sm={8} md={2} lg={2}>
          <Typography sx={{ fontWeight: 600, fontSize: 32 }}>
            Account type
          </Typography>
          <Typography
            variant="p"
            sx={{
              mb: 5,
              color: "#7D848D",
              fontSize: 19,
              fontWeight: 500,
            }}
          >
            Please select which type of <br />
            profile you want to create
          </Typography>
        </Grid>
        <Grid item xs={false} sm={false} md={5} lg={5}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
      {/* 2nd section  */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={4}></Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Link to="/userreg" style={{ textDecoration: "none" }}>
            <Box sx={{ marginBottom: "5%", marginLeft: { xs: "15%" } }}>
              <Card sx={styles.box1}>
                <CardContent sx={{ textAlign: "center", mt: 3 }}>
                  <Typography variant="h6" align="center">
                    I am a
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    Service Taker
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>

          <Link to="/profreg" style={{ textDecoration: "none" }}>
            <Box sx={{ marginLeft: { xs: "15%" } }}>
              <Card sx={styles.box2}>
                <CardContent sx={{ textAlign: "center", mt: 3 }}>
                  <Typography variant="h6" align="center">
                    I am a
                  </Typography>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ fontWeight: 600 }}
                  >
                    Professional
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Link>
        </Grid>

        <Grid item md={4}></Grid>
      </Grid>
      {/* 3rd section */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: { md: "-4%" } }} // Add negative margin for md and lg devices
      >
        <Grid item md={4} sx={{ display: { xs: "block", md: "flex" } }}>
          <Grid item>
            <img src={pic2} alt="Logo" style={img} />
          </Grid>
          <Grid
            item
            sx={{ marginLeft: { md: "15%" }, marginTop: { md: "-10%" } }}
          >
            <img src={pic1} alt="Logo" style={img} />
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          {" "}
        </Grid>

        <Grid item md={4} sx={{ display: { xs: "block", md: "flex" } }}>
          <Grid>
            <img src={pic4} alt="Logo" />
          </Grid>

          <Grid sx={{ marginLeft: { md: "15%" }, marginTop: { md: "-20%" } }}>
            <img src={pic3} alt="Logo" style={{ width: "110%" }} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegOptions;
