import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import img1 from "../../../img/Arrow_4.png";
import img2 from "../../../img/Arrow_1.png";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const SecondSection = () => {
  return (
    <Box
    sx={{
      flexGrow: 1,
      mt: 5,
      textAlign: "center",
      fontFamily: "SF UI Display",
      mb:5
    }}
  >
    {/* 1st section  */}
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item  md={4}>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={4} >
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
          height: 32,
          padding: "8px 24px 8px 16px",
          borderRadius: 48,
          border: "none",
          background: "#FFF",
          mb: 5,
          boxShadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.05) inset",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for the professional you need" />
      </Paper>
      </Grid> */}
      <Grid item  md={4} >
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
      <Grid item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{
              color: "#000",
              fontSize: "24px",
              fontFamily: "Shadows Into Light",
              fontStyle: "normal",
              fontWeight: 400,
              marginRight: 2,
            }}
          >
          
            Your location
          </Typography>
          <img
            src={img1}
            alt="Image"
            style={{ width: "114px", height: "60.25px", marginTop: "-4%" }}
          />
        </Grid>
  

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
        }}
      >
         <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: 32,
              padding: "8px 24px 8px 16px",
              borderRadius: 48,
              border: "none",
              background: "#FFF",
              mb: 5,
              boxShadow: "4px 4px 16px 0px rgba(0, 0, 0, 0.05) inset",
            }}
          >
            <IconButton type="button" sx={{ p: "10px", color: "black" }} aria-label="search">
              <PlaceIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search by location" />
          </Paper>
          <Button
            variant="contained"
            sx={{
              borderRadius: "50px",
              display: "flex",
              width: "40%",
              height: "55px",
              padding: "8px",
              gap: "8px",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "none",
              ml: 3,
            }}
          >
            <ArrowBackIosIcon />
            1 KM
            <ArrowForwardIosIcon />
          </Button>

      </Grid>

      <Grid item md={4}  sx={{ display: "flex", justifyContent: "center" }}>
      <img src={img2} alt="Image" style={{ width: "114px", height: "60.25px" }} />
          <Typography
            sx={{
              color: "#000",
              fontSize: 24,
              fontFamily: "Shadows Into Light",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "16px",
              marginTop: "15%",
            }}
          >
            Search Radius
          </Typography>
      </Grid>
    </Grid>

  </Box>
  
  );
};

export default SecondSection;
