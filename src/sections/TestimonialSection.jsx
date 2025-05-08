/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Typography } from "@mui/material";
import testimonialTableImage from "../assets/testimonial.jpg"; // Replace

const TestimonialSection = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}
    >
      <Typography
        variant="smallCaps"
        component="p"
        sx={{ mb: 4, letterSpacing: "0.1em" }}
      >
        WHAT MY CLIENTS SAY
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{
          mb: 3,
          lineHeight: 1.4,
          fontStyle: "italic",
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        "The attention to detail and creativity Valeriia brings to her work is
        truly remarkable. Our brand video turned out better than we imagined!"
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
        IRINA
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", mb: 5, textTransform: "uppercase" }}
      >
        FROM FESTIVE DECOR AGENCY
      </Typography>
      <Box
        component="img"
        src={testimonialTableImage}
        alt="Festive decor table setting"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      />
    </Container>
  );
};

export default TestimonialSection;
