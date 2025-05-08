/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import aboutMeCarImage from "../assets/header.jpg"; // Replace

const AboutMeSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, textAlign: "start" }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ letterSpacing: "0.05em", fontSize: { xs: "3rem", md: "4rem" } }}
      >
        ABOUT
      </Typography>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          letterSpacing: "0.05em",
          mb: 4,
          fontSize: { xs: "3rem", md: "4rem" },
        }}
      >
        ME
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "1rem", md: "2rem" },
        }}
      >
        VALERIIA MIV
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "0.5rem", md: "1rem" },
        }}
      >
        @LERAMIVPHOTO
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ textAlign: "left", mb: 3, px: { xs: 0, sm: 2 } }}
      >
        I create lively, stylish, and emotional shots that capture the essence
        of the moment. For me, photography is not just about taking pictures -
        it's about telling a story through light, colors, and emotions.
      </Typography>
      <Typography
        variant="body1"
        paragraph
        sx={{ textAlign: "left", mb: 5, px: { xs: 0, sm: 2 } }}
      >
        My goal is to make you feel comfortable in front of the camera, enjoy
        the process, and cherish the final result for years to come.
      </Typography>
      <Box
        component="img"
        src={aboutMeCarImage}
        alt="Valeriia with a vintage car"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          maxHeight: "500px",
          objectFit: "fill",
          border: "10px solid white", // Simulates the border from the image
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />
    </Container>
  );
};

export default AboutMeSection;
