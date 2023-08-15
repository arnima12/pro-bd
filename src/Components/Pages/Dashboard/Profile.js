
import React, { useContext, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import axios from 'axios'; // Import Axios for making HTTP requests
import { UserContext } from '../Authentication/UserContext';
import Cookies from 'js-cookie';

const cardStyles = {
  maxWidth: 400,
  margin: 'auto',
  marginTop: '16px',
  position: 'relative',
  overflow: 'hidden',
};

const mediaStyles = {
  height: 300,
};

const contentStyles = {
  textAlign: 'center',
};

const buttonStyles = {
  marginTop: '16px',
};

const Profile = () => {
  const [userData, setUserData] = useState(null);
  
  const { isLoggedIn } = useContext(UserContext);
  useEffect(() => {
    const fetchUser = async () => {
      if (isLoggedIn) {
        try {
          // Send the authentication token with the request
          const token = localStorage.getItem('cookie') // Replace "token" with the actual key of the token in the response
localStorage.setItem("cookie", token);
          const response = await axios.get("https://pbd.onrender.com/api/loadprofile", {
           headers:{
            "Authorization":`${token}`,
           }
            // withCredentials: true
          });
          console.log(response.data)
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUser();
  }, [isLoggedIn]);

  return (
    <div>
      {/* SVG background */}
      <svg
        viewBox="0 0 1440 320"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          transform: 'rotate(360deg)', // Rotate the SVG 180 degrees to flip it upside down
        }}
      >
        <path
          opacity="0.14"
          d="M1439.06 244.889V54.3183C1425.89 47.2518 1412.31 40.9853 1398.39 35.553C1337.73 12.125 1271.56 7.13626 1207.1 9.13176C1142.65 11.1273 1079.72 20.1646 1018.66 40.9638C958.531 61.4561 902.081 91.3118 848.337 124.928C796.531 157.374 743.535 189.725 682.691 201.678C622.673 213.536 563.499 201.678 509.486 173.972C420.878 128.516 354.374 45.4153 258.705 12.7966C205.882 -5.1821 147.821 -2.70692 94.2106 10.8778C66.5998 18.0348 33.9619 29.1827 13.4313 49.8476C8.39558 55.022 3.89564 60.6919 0 66.771L0 244.889H1439.06Z"
          fill="#0D6EFD"
        />
      </svg>

      <Card style={cardStyles}>

        <CardContent style={contentStyles}>
          {userData ? (
            <>
              <Typography variant="h5" gutterBottom>
                {userData.name}
              </Typography>
              {userData.email && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Email:</span> {userData.email}
                </Typography>
              )}
              {userData.mobile && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Phone Number:</span> {userData.mobile}
                </Typography>
              )}
          
              {userData.gender && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Gender:</span> {userData.gender}
                </Typography>
              )}
              {userData.country && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Country:</span> {userData.country}
                </Typography>
              )}
              {userData.district && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>District:</span> {userData.district}
                </Typography>
              )}
              {userData.zip && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>ZIP Code:</span> {userData.zip}
                </Typography>
              )}
              {userData.category && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Category:</span> {userData.category}
                </Typography>
              )}
              {userData.subcategory && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Subcategory:</span>{userData.subcategory}
                </Typography>
              )}
              {userData.education && (
                <Typography variant="body1" color="textSecondary">
                  <span style={{ fontWeight: "bold" }}>Education:</span>{userData.education}
                </Typography>
              )}

             
           

              {/* Add other user data as needed */}
              {/* <Button
                variant="contained"
                color="primary"
                style={buttonStyles}
                onClick={() => {
                  // Handle update button click here
                }}
              >
                Update
              </Button> */}
            </>
          ) : (
            <Typography variant="body1">Loading user data...</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
