import {
  Box,
  Button,
  Card,
  CardContent,
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
import { useContext, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { UserContext } from '../Authentication/UserContext';
// import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SecondSection = () => {
  
  const navigate = useNavigate();

  const [professionals, setProfessionals] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoggedIn } = useContext(UserContext);
  
  const location = useLocation();
  useEffect(() => {
    const fetchProfessionals = async () => {
      if (isLoggedIn) {
        try {
          const token = localStorage.getItem('cookie');
          document.cookie = 'cookie= juhi';
          console.log('token', token);

          // Check if the searchQuery is not empty before making the API call
          if (searchQuery) {
            const options = {
              headers: { Authorization: `${token}` },
            };

            const response = await axios.post(
              'https://pbd.onrender.com/api/loadprofessionallist',
              { query: searchQuery },
              options
            );
              console.log(response.data)
            setProfessionals(response.data);
          }
        } catch (error) {
          console.error('Error fetching professionals data:', error);
        }
      }
    };

    fetchProfessionals();
  }, [isLoggedIn, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleMessageNowClick = (professionalId, professionalName) => {
    
  
    // Get the current query parameters from the location object
    const queryParams = new URLSearchParams(location.search);
  
    // Add the professionalName as a query parameter to the existing ones
    queryParams.set('name', professionalName);
  console.log("queryParams",queryParams)
    // Convert the updated query parameters to a string
    const queryString = queryParams.toString();
    console.log("queryString",queryString)
  console.log(professionalId)
    // Use the navigate function to navigate to the MessagePage with both parameters
    navigate(`/msg/${professionalId}?${queryString}`);
  };
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
      <Grid item xs={12} sm={6} md={4} >
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
        <InputBase sx={{ ml: 1, flex: 1 }}       value={searchQuery}
        onChange={handleSearchChange} placeholder="Search for the professional you need" />
      </Paper>
      </Grid>
      <Grid item  md={4} >

      </Grid>
    </Grid>
    <Grid container spacing={2}>
  {professionals.map((professional, index) => (
    <Grid item xs={12} sm={6} md={4} key={professional.userid}>
      <Box height="100%">
        <Card style={{ maxWidth: 400, margin: '16px auto', height: '100%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {professional.name}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <span style={{ fontWeight: 'bold' }}>Service Category:</span> {professional.servicecatagory}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <span style={{ fontWeight: 'bold' }}>Profile:</span> {professional.profileicon}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              <span style={{ fontWeight: 'bold' }}>Ratings:</span> {professional.ratings}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 5 }}
              onClick={() => handleMessageNowClick(professional.userid, professional.name)}
            >
              Message Now
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  ))}
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