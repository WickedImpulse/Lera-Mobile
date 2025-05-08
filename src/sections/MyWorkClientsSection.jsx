import { Box, Container, Grid, Typography } from "@mui/material";
import workClient1 from "../assets/client1.JPG";
import workClient2 from "../assets/client2.JPG";
import workClient3 from "../assets/client3.JPG";
import workClient4 from "../assets/client4.JPG";

const images = [
  { src: workClient1, alt: "Client in trench coat by car" },
  { src: workClient2, alt: "Client in white dress by vintage car" },
  { src: workClient3, alt: "Client in denim trench coat" },
  { src: workClient4, alt: "Client in denim trench coat sitting" },
];

const MyWorkClientsSection = () => {
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
                height: "auto", // Or fixed height if you want to crop
                objectFit: "cover",
                aspectRatio: "3/4", // Approximate aspect ratio from images
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyWorkClientsSection;
