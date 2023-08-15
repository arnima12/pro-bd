import React from 'react';
import '../Style/Style.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';
import { Link, } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer" sx={{mb:5}} id="footer">
          <p className="secondText">A Product by SheBa Web Technology LLC</p>
      <p className="text">© ProfessionalBD 2019-2023 All rights reserved</p>
      <Link to ="terms">
      <p className="text">Terms and Condition</p>

      </Link>
      <div className="iconContainer">
      <div>
      <a href="https://www.instagram.com">
        <InstagramIcon className="icon" sx={{ marginRight: "96px" }} />
      </a>
      <a href="https://www.facebook.com/people/Professionalbd/100094322900633/?mibextid=ZbWKwL"  target="_blank">
        <FacebookIcon className="icon" sx={{ marginRight: "96px" }} />
      </a>
      <a href="https://www.twitter.com">
        <TwitterIcon className="icon" />
      </a>
    </div>
      </div>
    </Box>
  );
};

export default Footer;