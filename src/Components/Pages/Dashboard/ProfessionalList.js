
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import { UserContext } from '../Authentication/UserContext';
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProfessionalList = () => {

  const navigate = useNavigate();
  // const [professionals, setProfessionals] = useState([]);
  // const { isLoggedIn } = useContext(UserContext);

  // useEffect(() => {
  //   const fetchProfessionals = async () => {
  //     if (isLoggedIn) {
  //               try {
  //                 // Send the authentication token with the request
  //                 const token = localStorage.getItem("cookie");
  //                 document.cookie = "cookie= juhi";
  //                 console.log("token", token)
  //                 const options = {
  //                   headers: { "Authorization":`${token}`}
  //                 };

  //                 const response = await axios.post('https://pbd.onrender.com/api/loadprofessionallist', { query: "electrician" }, options);

  //               setProfessionals(response.data);
  //             } catch (error) {
  //               console.error('Error fetching professionals data:', error);
  //             }
  //           }
  //         };



  //   fetchProfessionals();
  // }, [isLoggedIn]);
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
    <Box>
      <TextField
        label="Search Professionals"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '16px' }}
      />


<Grid container spacing={2}>
        {professionals.length > 0 ? (
          professionals.map((professional,index) => (
            
            <Grid item xs={12} sm={6} md={4} key={professional.userid}>
              
              <Box height="100%"> {/* Set a fixed height for each card */}
                <Card style={{ maxWidth: 400, margin: '16px auto', height: '100%' }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {professional.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      <span style={{ fontWeight: 'bold' }}>Service Category:</span> {professional.servicecatagory}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      <span style={{ fontWeight: 'bold' }}>Profile :</span> {professional.profileicon}
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
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="body1">No professionals found.</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProfessionalList;





