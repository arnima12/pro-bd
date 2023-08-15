import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import pic2 from "../../../img/pic2.png";
import pic4 from "../../../img/Group 39872.svg";
import logo from "../../../img/Group 39875.svg";

const OTPVerification = () => {
  const [mail, setMail] = useState('');
  const [code, setCode] = useState('');
  const [verificationMsg, setVerificationMsg] = useState('');
  const navigate = useNavigate()
  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://pbd.onrender.com/verifycode', { mail,code });
      if (response.data.msg === 'OK') {
        setVerificationMsg('Code verification successful!');
        navigate('/login');
        // window.location.reload();
        // setCode({code:""})
      } else {
        setVerificationMsg('Failed to verify your code!');
      }
    } catch (error) {
      console.error(error);
      setVerificationMsg('An error occurred while verifying the code.');
    }
  };

  return (
    // <div>
    //   <h2>OTP Verification</h2>
    // <form onSubmit={handleVerification}>
    //   <TextField
    //     label="Email"
    //     type="email"
    //     value={mail}
    //     onChange={(e) => setMail(e.target.value)}
    //     required
    //     fullWidth
    //     margin="normal"
    //   />
    // <TextField
    //   label="Verification Code"
    //   type="text"
    //   value={code}
    //   onChange={(e) => setCode(e.target.value)}
    //   required
    //   fullWidth
    //   margin="normal"
    // />
    //     <Button variant="contained" color="primary" type="submit">
    //       Verify
    //     </Button>
    //   </form>
    //   <p>{verificationMsg}</p>
    // </div>
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
          <Grid item md={5} lg={5}>
            <img src={logo} alt="Logo" />
          </Grid>
          <Grid item xs={12} sm={8} md={2} lg={2}>
            <Typography sx={{ fontWeight: 600, fontSize: 32 }}>
              OTP Verification{" "}
            </Typography>
            <Typography>{verificationMsg}</Typography>

          </Grid>
          <Grid item xs={false} sm={false} md={5} lg={5}>
            <img src={logo} alt="Logo" />
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
            <img src={pic2} alt="Logo" />
          </Grid>

          <Grid item xs={12} md={4}>
            <form onSubmit={handleVerification}>
              <TextField
                label="user"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                label="Verification Code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" type="submit">
                Verify
              </Button>
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

export default OTPVerification;
