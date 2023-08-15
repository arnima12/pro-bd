import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../Components/Pages/Authentication/UserContext";

function Header() {
  const { isLoggedIn, handleLogout } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              color: "#0D6EFD",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "#FFB800" }}>Pro</span>fessionalBD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "rgba(51, 51, 51, 0.50)",
                  fontWeight: "bold",
                }}
              >
                <MenuItem>Home</MenuItem>
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "rgba(51, 51, 51, 0.50)",
                    fontWeight: "bold",
                  }}
                >
                  <MenuItem sx={{ color: "rgba(51, 51, 51, 0.50)" }}>
                    Dashboard
                  </MenuItem>
                </NavLink>
              )}
              {isLoggedIn ? (
                <>
                  <Button
                    variant="outlined"
                    onClick={handleLogout}
                    sx={{ color: "#0D6EFD", borderColor: "#0D6EFD", mr: 2 }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/optn"
                    style={{
                      textDecoration: "none",
                      color: "rgba(51, 51, 51, 0.50)",
                      fontWeight: "bold",
                    }}
                  >
                    <MenuItem mr={2}>Create Account</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "rgba(51, 51, 51, 0.50)",
                      fontWeight: "bold",
                    }}
                  >
                    <MenuItem mr={2}>Login</MenuItem>
                  </NavLink>
                </>
              )}
              <MenuItem sx={{ color: "rgba(51, 51, 51, 0.50)" }}>
                Contact us
              </MenuItem>
            </Menu>
          </Box>

          {/* langunage option wont display at samll device */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              color: "#4F4F4F",
            }}
          >
            <LanguageIcon />
            <Typography sx={{ ml: 2 }}>English</Typography>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 800,
              color: "#0D6EFD",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "#FFB800" }}>Pro</span>fessionalBD
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            <NavLink
              to="/"
              style={{
                textDecoration: "none",
                color: "rgba(51, 51, 51, 0.50)",
                fontWeight: "bold",
              }}
            >
              <MenuItem>Home</MenuItem>
            </NavLink>
            <MenuItem sx={{ color: "rgba(51, 51, 51, 0.50)" }}>
              Pricing
            </MenuItem>

            {/* Conditionally render the "Dashboard" option */}
            {isLoggedIn && (
              <NavLink
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "rgba(51, 51, 51, 0.50)",
                  fontWeight: "bold",
                }}
              >
                <MenuItem sx={{ color: "rgba(51, 51, 51, 0.50)" }}>
                  Dashboard
                </MenuItem>
              </NavLink>
            )}

            <MenuItem sx={{ color: "rgba(51, 51, 51, 0.50)" }}>
              Contact us
            </MenuItem>
          </Box>

          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            {isLoggedIn ? (
              <>
                <Button
                  variant="outlined"
                  onClick={handleLogout}
                  sx={{ color: "#0D6EFD", borderColor: "#0D6EFD", mr: 2 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink
                  to="/optn"
                  style={{
                    textDecoration: "none",
                    color: "rgba(51, 51, 51, 0.50)",
                    fontWeight: "bold",
                  }}
                >
                  <MenuItem mr={2}>Create Account</MenuItem>
                </NavLink>{" "}
                <Link to="login">
                  <Button
                    variant="contained"
                    sx={{ ml: 4, borderRadius: "10px" }}
                  >
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
