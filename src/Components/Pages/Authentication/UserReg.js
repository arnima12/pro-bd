import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic1 from "../../../img/pic1.png";
import pic3 from "../../../img/pic3.png";
import { UserContext } from "./UserContext";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Cookies from "js-cookie";

const UserReg = () => {
  const logoStyle = {
    width: "80%",
    // height: "50%",
  };
  const [state, setState] = useState({});

  // const { setIsLoggedIn } = useContext(UserContext); // Access the UserContext
  const navigate = useNavigate();
  //handle password vsisibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);
  //form input fields handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, pass, mobile } = formData;
  
    // Password regex condition
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!name || !email || !pass || !mobile) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    if (!passwordRegex.test(pass)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 8 characters long."
      );
      return;
    }
  
    try {
      const response = await axios.post('https://pbd.onrender.com/signup', {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        pass: formData.pass,
      });
  
      if (response.data) {
        console.log("response", response);
        setRegistered(true);
        // console.log("Token cookie:", Cookies.get("token"));
        setFormData({
          name: "",
          email: "",
          mobile: "",
          pass: "",
        });
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };
  
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const { name, email, pass, mobile } = formData;
  //   if (!name || !email || !pass || !mobile) {
  //     alert("Please fill in all the required fields.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post('https://pbd.onrender.com/signup', {
  //       name: formData.name,
  //       mobile: formData.mobile,
  //       email: formData.email,
  //       pass: formData.pass,
  //     });

  //     if (response.data) {
  //       console.log("response", response)
  //       setRegistered(true);
  //       // console.log("Token cookie:", Cookies.get("token"));
  //       setFormData({
  //         name: "",
  //         email: "",
  //         mobile: "",
  //         pass: "",
  //       });

  //     } else {
  //       alert('Registration failed. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error registering user:', error);
  //     alert('Registration failed. Please try again.');
  //   }
  // };

  const { gilad } = state;
  return (
    <div>
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          top: "15%",
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
          <Grid item md={4}>
            <img src={pic1} alt="Logo" style={logoStyle} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ border: "none" }}>
                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 600,
                    fontFamily: "SF UI Display",
                  }}
                >
                  Sign Up Now
                </Typography>

                <Box>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                    gutterBottom
                    sx={{ color: "#7D848D", fontWeight: 500, fontSize: "20" }}
                  >
                    Please fill the details to <br></br>
                    create an account{" "}
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          margin="normal"
                          required
                          onChange={handleInputChange}
                          fullWidth
                          id="name-input"
                          name="name"
                          value={formData.name}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          type="email"
                          variant="outlined"
                          margin="normal"
                          onChange={handleInputChange}
                          required
                          fullWidth
                          id="email-input"
                          name="email"
                          value={formData.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Mobile Number"
                          type="tel"
                          variant="outlined"
                          margin="normal"
                          onChange={handleInputChange}
                          required
                          fullWidth
                          id="phone-input"
                          name="mobile"
                          value={formData.mobile}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          id="standard-basic"
                          label="Your password"
                          name="pass"
                          value={formData.pass}
                          onChange={handleInputChange}
                          variant="outlined"
                          fullWidth
                          required
                          type={showPassword ? "text" : "password"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleTogglePasswordVisibility}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />

                      </Grid>
                    </Grid>
                    <Box sx={{ display: "flex" }}>
                      <FormControl
                        sx={{ m: 3 }}
                        component="fieldset"
                        variant="standard"
                      >
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={gilad}
                                onChange={handleInputChange}
                                name="gilad"
                              />
                            }
                            label="I agree with ProfessionalBD Privacy Policy"
                          />
                        </FormGroup>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={gilad}
                                onChange={handleInputChange}
                                name="gilad"
                              />
                            }
                            label="I agree with the Terms and Conditions"
                          />
                        </FormGroup>
                      </FormControl>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      Sign Up
                    </Button>
                  </form>
                  {registered && navigate("/otp")}
                  
                  <Typography variant="body2" align="center" gutterBottom>
                    Already have an account? <Link to="/login">Log In</Link>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Grid>
          <Grid item md={4}>
            <img src={pic3} alt="Logo" style={logoStyle} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default UserReg;