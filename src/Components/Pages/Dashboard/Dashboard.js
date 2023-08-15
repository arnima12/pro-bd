import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Route, Routes } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { Container } from "@mui/material";
import { GrUserSettings } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { BsPersonLinesFill, BsBookmarkDash } from "react-icons/bs";

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

import LoginIcon from "@mui/icons-material/Login";
import Profile from "./Profile";
import { UserContext } from "../Authentication/UserContext";
import ProfessionalList from "./ProfessionalList";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
const SvgBackground = styled("svg")({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  transform: "rotate(360deg)",
});

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const { isLoggedIn, handleLogout } = React.useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // State to manage which component to render dynamically
  const [selectedComponent, setSelectedComponent] = React.useState(null);

  // Handler to render the Profile component
  const handleProfileClick = () => {
    setSelectedComponent(<Profile />);
  };
    // Handler to render the Profile component
    const handlelistClick = () => {
      setSelectedComponent(<ProfessionalList/>);
    };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ background: "#fff", color: "#000" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              fontFamily: "monospace",
              fontWeight: 800,
              width: "90%",
              display: "flex",
              justifyContent: "center",
              color: "#0D6EFD",
            }}
          >
            <span style={{ color: "#FFB800" }}>Pro</span>fessionalBD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Toolbar style={{ color: "#000" }}>
            <Typography
              variant="h6"
              noWrap
              href=""
              sx={{
                fontWeight: 600,
                color: "#0D6EFD",
                textDecoration: "none",
              }}
            >
              <span style={{ color: "#FFB800" }}>Pro</span>fessionalBD
            </Typography>
          </Toolbar>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Links for routing */}
        <List>
          <NavLink
            to="/"
            style={{ textDecoration: "none", width: "100%", color: "#000" }}
          >
            <ListItem disablePadding>
              <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                <ListItemIcon>
                  <FcHome style={{ color: "#000", fontSize: "1.5rem" }} />
                </ListItemIcon>
                <ListItemText primary="Overview" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          {/*  view for user */}
          <ListItem disablePadding>
            <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
              <ListItemIcon>
                <FaUser
                  style={{
                    color: "#000",
                    fontSize: "1.5rem",
                    marginRight: "1rem",
                  }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <TreeView
            style={{
              color: "#000",
              background: "#fff",
              textAlign: "justify",
              paddingLeft: "2.5rem",
              marginTop: "-2.4rem",
            }}
            aria-label="file system navigator"
            defaultExpanded={["1"]}
            defaultCollapseIcon={
              <div style={{ padding: ".3rem 0", visibility: "hidden" }}>
                <FaUser style={{ color: "#000", fontSize: "1.5rem" }} />
              </div>
            }
            defaultExpandIcon={
              <div style={{ padding: ".3rem 0", visibility: "hidden" }}>
                <FaUser style={{ color: "#000", fontSize: "1.5rem" }} />
              </div>
            }
            sx={{ height: 300, flexGrow: 1, maxWidth: 420, overflowY: "auto" }}
          >
            <TreeItem
              nodeId="1"
              label="User"
              style={{ color: "#000", background: "#FFFFFF" }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  style={{ borderRadius: "0 40px 40px 0" }}
                  onClick={handleProfileClick} // Handle click to render Profile dynamically
                >
                  <ListItemIcon>
                    <BsPersonLinesFill
                      style={{ color: "#000", fontSize: "1.3rem" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Profile"
                    style={{ marginLeft: "-1rem" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  style={{ borderRadius: "0 40px 40px 0" }}
                  onClick={handlelistClick} // Handle click to render Profile dynamically
                >
                  <ListItemIcon>
                    <BsPersonLinesFill
                      style={{ color: "#000", fontSize: "1.3rem" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Professional List"
                    style={{ marginLeft: "-1rem" }}
                  />
                </ListItemButton>
              </ListItem>
           
              <NavLink
                to="/msg"
                style={{ textDecoration: "none", width: "100%", color: "#000" }}
              >
                <ListItem disablePadding>
                  <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                    <ListItemIcon>
                      <AiOutlineMessage
                        style={{ color: "#000", fontSize: "1.4rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Message"
                      style={{ marginLeft: "-1rem" }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </TreeItem>
          </TreeView>
          {isLoggedIn ? (
            <>
              {/* login or logout  */}
              <NavLink
                    onClick={handleLogout}
                style={{ textDecoration: "none", width: "100%", color: "#000" }}
              >
                <ListItem>
                  <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                    <ListItemIcon>
                      <LoginIcon
                        style={{ color: "#000", fontSize: "1.5rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                style={{ textDecoration: "none", width: "100%", color: "#000" }}
              >
                <ListItem>
                  <ListItemButton style={{ borderRadius: "0 40px 40px 0" }}>
                    <ListItemIcon>
                      <LoginIcon
                        style={{ color: "#000", fontSize: "1.5rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </>
          )}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Container maxWidth="lg">
          <Main open={open}>
            <DrawerHeader />
            <Container maxWidth="lg">
              {/* Render the selected component */}
              {selectedComponent}
            </Container>
          </Main>
        </Container>
      </Main>

      <SvgBackground
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
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
      </SvgBackground>
    </Box>
  );
}
