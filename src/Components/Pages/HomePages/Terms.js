import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Terms = () => {
  return (
    <div>
      <Container sx={{ mt: "20px", p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 28, textAlign: "center" }}>
          Terms & Condition
        </Typography>
        <Box sx={{ mt: 3, textAlign: "left" }}>
          <Box sx={{ mt: 3, textAlign: "left", fontSize: 18 }}>
            <Typography sx={{ color: "#253a58", fontWeight: "bold", fontSize: 24 }}>
              Agreement To The Terms And Conditions:
            </Typography>
            <Divider sx={{ my: "20px" }} />
            <Typography variant="body1" sx={{ textAlign: "left", fontSize: 18 }}>
              You agree that you will be subjected to and will comply with these terms and conditions-
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="By completing your registration through the site; and" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FiberManualRecordIcon sx={{ color: "black" }} />
                  </ListItemIcon>
                  <ListItemText primary="Using the site to obtain services from us." />
                </ListItem>
              </List>
              <Typography variant="body1" sx={{ textAlign: "left", fontSize: 18 }}>
                If you use the website and app, you will be responsible for maintaining the confidentiality of your username and password and for all the activities that occur under your username. You will be under the obligation to restrict access to your electronic device to prevent unauthorized access to your account. You should take actions immediately if you have any assurance that your password has become known to anyone else, or if that is to be, used in an unauthorized manner. You agree that if you provide any information that is not accurate or incomplete, we have reasonable floor to suspect that such information inaccurate or not in accordance with the terms & conditions, we have the right to suspend or terminate your user or membership account on the website.
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: "left", fontSize: 18 }}>
            <Typography sx={{ color: "#253a58", fontWeight: "bold", fontSize: 24 }}>
              Copyright
            </Typography>
            <Divider sx={{ my: "10px" }} />
            <Typography variant="body1" sx={{ textAlign: "left", fontSize: 18 }}>
              The materials (including any other content, software or services) contained on ProfessionalBD are the property of SheBa Group, USA, its subsidiaries, affiliates and/or third-party joint ventures. No material on this site may be copied, reproduced, republished, installed, posted, transmitted, stored or distributed without written permission from ProfessionalBD. You may not use any automatic device, program, or methodology, or any equivalent manual process, to access, copy or monitor any portion of the website or any content, or in any way reproduce the navigational structure of the website or any content, to obtain any documents or information by any means not purposely made available through the website and its app.
            </Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: "left", fontSize: 18 }}>
            <Typography sx={{ color: "#253a58", fontWeight: "bold", fontSize: 24 }}>
              Promotional Activity
            </Typography>
            <Divider sx={{ my: "10px" }} />
            <Typography variant="body1" sx={{ textAlign: "left", fontSize: 18 }}>
              To promote its services, we accept various advertisement and commercials which are not unequivocal or unfair to the best of our knowledge and belief. Every user or vendor is bound to go through the relevant information contained on the website and app before using the service. It will be assumed that each user/vendor is aware of the information provided on the website and app. Images of the services are for reference only, and the actual service may slightly vary from the corresponding image exhibited.
            </Typography>
          </Box>

          <Box sx={{ mt: 3, textAlign: "left", fontSize: 18 }}>
            <Typography sx={{ color: "#253a58", fontWeight: "bold", fontSize: 24 }}>
              Use Of Third-Party Services
            </Typography>
            <Divider sx={{ my: "10px" }} />
            <Typography sx={{ textAlign: "left", fontSize: 18 }}>
              When you use the ProfessionalBD website or app, you may also be using the services of one or more third parties, such as a wireless carrier and internet provider. Your use of these third-party services may be subjected to the separate policies, terms & conditions, and related fees of the parties.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Terms;
