import { Box, Container, Grid, Typography } from "@mui/material";
import workTwoWomen1 from "../assets/twoWomen1.JPG";
import workTwoWomen2 from "../assets/twoWomen2.JPG";
import workTwoWomen3 from "../assets/twoWomen3.JPG";
import workTwoWomen4 from "../assets/twoWomen4.JPG";

const images = [
  { src: workTwoWomen1, alt: "Two women in field" },
  { src: workTwoWomen2, alt: "Two women close up" },
  { src: workTwoWomen3, alt: "Two women posing in field" },
  { src: workTwoWomen4, alt: "Two women walking in field" },
];

const MyWorkTwoWomenSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            letterSpacing: "0.05em",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          MY WORK
        </Typography>
        <Typography
          variant="portfolioScript"
          component="p"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Photos of my clients
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                aspectRatio: "3/4", // Adjust if different
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyWorkTwoWomenSection;
