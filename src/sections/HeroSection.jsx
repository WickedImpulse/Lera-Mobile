import { Box, Container, Divider, Typography } from "@mui/material";
import heroModelImage from "../assets/header.JPG"; // Replace with your image

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg">
        {/* Image Section */}
        <Box
          sx={{
            width: "100%",
            height: { xs: "40vh", sm: "50vh", md: "60vh" },
            position: "relative",
            overflow: "hidden",
            borderRadius: "4px",
            my: 2,
          }}
        >
          <Box
            component="img"
            src={heroModelImage}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.default",
            py: 4,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mb: 2,
              px: 2,
            }}
          >
            <Typography variant="smallCaps">Content Creator</Typography>
            <Typography variant="smallCaps">
              Photography & Videography
            </Typography>
          </Box>
          <Divider sx={{ my: 2, mx: "auto", width: "90%" }} />
          <Typography
            variant="h2"
            component="h1"
            sx={{ letterSpacing: "0.1em", my: 1 }}
          >
            VALERIIA MIV
          </Typography>
          <Divider sx={{ my: 2, mx: "auto", width: "90%" }} />
          <Typography variant="portfolioScript" component="p" sx={{ mt: 1 }}>
            Portfolio
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
