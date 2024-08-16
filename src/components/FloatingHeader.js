// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import "./styles/FloatingHeader.css";

// const FloatingHeader = () => {
//   return (
//     <header className="floating-header">
//       <div className="social-icons">
//         <a
//           href="https://www.facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FontAwesomeIcon icon={faFacebook} size="2x" />
//         </a>
//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FontAwesomeIcon icon={faTwitter} size="2x" />
//         </a>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FontAwesomeIcon icon={faInstagram} size="2x" />
//         </a>
//       </div>
//       <nav className="header-nav">
//         <a href="#online-orders">Online Orders</a>
//         <a href="#about-us">About Us</a>
//       </nav>
//       <button className="coming-soon-button">
//         Coming Soon <FontAwesomeIcon icon={faChevronRight} />
//       </button>
//     </header>
//   );
// };

// export default FloatingHeader;
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./styles/FloatingHeader.css";
import ComingSoonModal from "./ComingSoonModal";
import { styled } from "@mui/material/styles";

const ElevatedHeader = styled(Typography)(({ theme }) => ({
  transition: "all 0.3s ease",
  fontSize: ".75rem",
  fontWeight: "bold",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#1d1d1d", // Default background color
  color: "#fff", // Default text color
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "#fff", // Background color on hover
    color: "#000", // Text color on hover
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.7)",
  },
}));

export default function FloatingHeader() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#1d1d1d",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <ElevatedHeader>Gangsta Paradise Clothing</ElevatedHeader>
          </Box>
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
          <div style={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com"
            target="_blank"
          >
            <Instagram />
          </IconButton>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
            Coming Soon
          </Button>
        </Toolbar>
      </AppBar>
      <ComingSoonModal open={modalOpen} onClose={handleClose} />
    </>
  );
}
