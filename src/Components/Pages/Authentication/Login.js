import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../img/Group 39875.svg";
import pic2 from "../../../img/pic2.png";
import pic4 from "../../../img/Group 39872.svg";
import { UserContext } from "./UserContext";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const logoStyle = {

  };

  const img = {
 
  };

  const { setIsLoggedIn,setUserId } = useContext(UserContext); // Access the UserContext
  //HANDELING PASSWORD VISIBILITY
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  //FORM DATA HANDLE
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
 

    try {
      const response = await axios.post("https://pbd.onrender.com/login", {
        user: formData.user,
        pass: formData.pass,
      });
console.log("response",response)
      if (response.data) {
        const userId = response.data;
        console.log("response",response)
        localStorage.setItem("cookie", response.data.cookie);
        console.log("cookie",response.data.cookie);
        setIsLoggedIn(true);
        setUserId(userId)
        console.log("userId",userId)
        setFormData({ user: "", pass: "" });
      
        // window.location.href = "/";

      } else {
        alert("Login failed. Please check your username or password.");
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };
 
  return (
    <div>
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: "10%",
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
      <Box
        sx={{
          flexGrow: 1,
          mt: 5,
          textAlign: "center",
          fontFamily: "SF UI Display",
        }}
      >
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
              Sign in now{" "}
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
              Please sign in to <br></br>
              continue with this site
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
          <Grid item md={4}>
            <img src={pic2} alt="Logo" style={img} />
          </Grid>

          <Grid item xs={12} md={4}>
            <form onSubmit={handleSubmit}>
              <TextField
                sx={{ width: "100%", mb: 1 }}
                id="standard-basic-1"
                label="User"
                name="user"
                value={formData.user}
                onChange={handleInputChange}
                variant="outlined"
                required
              />
              <TextField
                sx={{ width: "100%", mb: 1 }}
                id="standard-basic"
                label="Your password"
                name="pass"
                value={formData.pass}
                onChange={handleInputChange}
                variant="outlined"
                required
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                sx={{ width: "100%", mb: 1 }}
                variant="contained"
                type="submit"
              >
                Login
              </Button>

              <NavLink to="/userreg">
                <Button sx={{ width: "100%", background: "#F6FAFD" }}>
                  For the First time? Go to register
                </Button>
              </NavLink>
            </form>
          </Grid>

          <Grid item md={4}>
            {" "}
            <img src={pic4} alt="Logo" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
