import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Menu as MenuIcon,
} from "@mui/icons-material";
import ComingSoonModal from "./ComingSoonModal";
import { styled } from "@mui/material/styles";

const ElevatedHeader = styled(Typography)(({ theme }) => ({
  transition: "all 0.3s ease",
  fontSize: "1rem",
  fontWeight: "bold",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#1d1d1d",
  color: "#fff",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.7)",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const SmallButton = styled(Button)(({ theme }) => ({
  fontSize: "0.75rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
}));

const FloatingHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1d1d1d",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
          padding: "0 16px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "space-between", sm: "space-between" },
            flexDirection: { xs: "row", sm: "row" },
            position: "relative",
          }}
        >
          {/* Menu Icon for Small Screens */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Header Title Centered on Smaller Screens */}
          <Box
            sx={{
              display: { xs: "flex", sm: "flex" },
              flexGrow: 1,
              justifyContent: { xs: "center", sm: "center" },
              alignItems: "center",
              marginLeft: { xs: "8px", sm: "0" }, // Adjust spacing between menu icon and text for small screens
              marginRight: { xs: "8px", sm: "0" }, // Adjust spacing between text and coming soon button for small screens
            }}
          >
            <ElevatedHeader>Gangsta Paradise Clothing</ElevatedHeader>
          </Box>

          {/* Coming Soon Button on Small Screens */}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              marginLeft: theme.spacing(1),
            }}
          >
            <SmallButton variant="contained" color="secondary">
              Coming Soon
            </SmallButton>
          </Box>

          {/* Show All Buttons and Icons on Larger Screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <Button color="inherit" onClick={handleClickOpen}>
              Online Orders
            </Button>
            <Button
              color="inherit"
              onClick={() =>
                document
                  .getElementById("about-us")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About Us
            </Button>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
            <SmallButton variant="contained" color="secondary">
              Coming Soon
            </SmallButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            backgroundColor: "#000", // Black background for the drawer
            color: "#fff", // White text color for contrast
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Menu
          </Typography>
          <List>
            <ListItem button onClick={handleClickOpen}>
              <ListItemText primary="Online Orders" />
            </ListItem>
            <ListItem
              button
              onClick={() =>
                document
                  .getElementById("about-us")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://facebook.com"
              target="_blank"
            >
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://twitter.com"
              target="_blank"
            >
              <ListItemText primary="Twitter" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://instagram.com"
              target="_blank"
            >
              <ListItemText primary="Instagram" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Coming Soon" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <ComingSoonModal open={modalOpen} onClose={handleClose} />
    </>
  );
};

export default FloatingHeader;
