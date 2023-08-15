import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  CardContent,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import pic1 from "../../../img/pic1.png";
import pic3 from "../../../img/pic3.png";
import { UserContext } from "./UserContext";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";

const ProfessionalReg = () => {
  // const { setIsLoggedIn } = useContext(Use/rContext);
  const logoStyle = {};
  const [registered, setRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    pass: "",
    category: "",
    subcategory: "",
    education: "",
    gender: "",
    country: "",
    district: "",
    zip: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, pass, mobile, category, subcategory, education, gender, country, district, zip } = formData;
    if (!name || !email || !pass || !mobile || !category || !subcategory || !education || !gender || !country || !district || !zip) {
      alert("Please fill in all the required fields.");
      return;
    }

    try {
      const response = await axios.post('https://pbd.onrender.com/signup', {
        name: formData.name,
        mobile: formData.mobile,
        email: formData.email,
        pass: formData.pass,
        category: formData.category,
        subcategory: formData.subcategory,
        education: formData.education,
        gender: formData.gender,
        country: formData.country,
        district: formData.district,
        zip: formData.zip,

      });

      if (response.data) {
        console.log("response", response)

        setRegistered(true);
        // console.log("Token cookie:", Cookies.get("token"));
        setFormData({
          name: "",
          email: "",
          mobile: "",
          pass: "",
          category: "",
          subcategory: "",
          education: "",
          gender: "",
          country: "",
          district: "",
          zip: "",
        });
        // window.location.href = '/otp';

      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed. Please try again.');
    }
  };


  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 5,
        textAlign: "center",
        fontFamily: "SF UI Display",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          top: "20%",
          width: "100%",
          height: "100%",
          zIndex: -1,
          transform: "rotate(360deg)",
        }}
      >
        <path
          opacity="0.14"
          d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
          fill="#0D6EFD"
        />
      </svg>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="center" sx={{ mb: 5 }}>
        <Grid item xs={12} md={2} sx={{ mt: 5 }}>
          <img src={pic1} alt="Logo" style={logoStyle} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                      Professional Information
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" align="center">
                      Please enter your professional information
                    </Typography>
                  </Grid>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>

                      <Grid item xs={12}>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="name-input"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Email"
                          type="email"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email-input"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          label="Mobile Number"
                          type="tel"
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="phone-input"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
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
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="category"
                          label="Category"
                          required
                          select
                          name="category"

                          value={formData.category}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">--- Select Category ---</MenuItem>
                          <MenuItem value="Electrician">Electrician</MenuItem>
                          <MenuItem value="Plumber">Plumber</MenuItem>
                          <MenuItem value="Carpenter">Carpenter</MenuItem>

                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="subcategory"
                          label="Subcategory"
                          required
                          name="subcategory"
                          select
                          value={formData.subcategory}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">--- Select Subcategory ---</MenuItem>
                          <MenuItem value="Hair Saloon">Hair Saloon</MenuItem>
                          <MenuItem value="Car">Car</MenuItem>
                          <MenuItem value="Computer">Computer</MenuItem>

                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="education"
                          label="Latest Education"
                          required
                          select
                          name="education"

                          value={formData.education}
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">--- Select Education ---</MenuItem>
                          <MenuItem value="PEC and Equivalent">PEC and Equivalent</MenuItem>
                          <MenuItem value="JSC and Equivalent">JSC and Equivalent</MenuItem>
                          <MenuItem value="SSC and Equivalent">SSC and Equivalent</MenuItem>
                          <MenuItem value="HSC and Equivalent">HSC and Equivalent</MenuItem>
                          <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                          <MenuItem value="Graduate">Graduate</MenuItem>

                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="gender"
                          name="gender"
                          label="Gender"
                          required
                          value={formData.gender}
                          select
                          onChange={handleInputChange}
                        >
                          <MenuItem value="">--- Select Gender ---</MenuItem>
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="country"
                          name="country"
                          label="Country"
                          select
                          required
                          value={formData.country}

                          onChange={handleInputChange}
                        >
                          <MenuItem value="">--- Select Country ---</MenuItem>
                          <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                          <MenuItem value="Albania">Albania</MenuItem>
                          <MenuItem value="Algeria">Algeria</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="district"
                          label="District"
                          required
                          name="district"
                          value={formData.district}
                          onChange={handleInputChange}
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          id="zip"
                          label="Zip Code"
                          required
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          fullWidth
                        >
                          Sign Up
                        </Button>
                      </Grid></Grid>
                  </form>

                </Grid>

              </CardContent>
              <Link to="/otp" sx={{ mt: 5 }}>
                <Button
                sx={{ width: "100%", background: "#F6FAFD" }}
                  fullWidth
                >
                  Now Click Here to Verify Your OTP
                </Button>
              </Link>
            </Box>

          </Container>

        </Grid>
        <Grid item xs={12} md={2} sx={{ marginTop: "9%" }}>
          <img src={pic3} alt="Logo" style={logoStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalReg;