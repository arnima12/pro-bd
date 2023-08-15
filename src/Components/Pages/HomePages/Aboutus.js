import React from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Grid,
} from "@mui/material";
import "../../../Style/Style.css";


function Aboutus() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{ mt: 5 }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            p: 2,
          }}
        >
          Connecting you to the perfect{" "}
          <span className="pbg" style={{ padding: "21px" }}>
            Professionals
          </span>
        </Typography>
      </Grid>

      <Grid item sx={{ width: { md: "503px", lg: "503px" } }}>
        <Box className="subtitle" sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            className="subtitle-text"
            sx={{
              color: "var(--light-sub-text-color, #7D848D)",
              fontSize: "20px",
              fontFamily: "Gill Sans MT",
              fontStyle: "normal",
              fontWeight: 400,
            }}
          >
            Find trusted professionals for any task with ease. Your go-to app
            for hassle-free connections.
          </Typography>
        </Box>
      </Grid>
    
    </Grid>
  );
}

export default Aboutus;
