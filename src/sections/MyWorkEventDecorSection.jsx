import { Box, Container, Grid, Typography } from "@mui/material";
import eventDecorToast from "../assets/BoatVideo.mp4";
import {
  default as eventDecorTable1,
  default as eventDecorTable2,
} from "../assets/decor2.jpg";
import eventDecorTable3 from "../assets/decor3.jpg";
import eventDecorTable4 from "../assets/decor4.jpg";

const MyWorkEventDecorSection = () => {
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
          Photos/Videos
        </Typography>
      </Box>
      <Box sx={{ width: "100%", mb: 2, aspectRatio: "16/9" }}>
        <video
          controls
          playsInline
          preload="metadata"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            backgroundColor: "#f0f0f0",
          }}
          onError={(e) => {
            console.error("Video error:", e.target.error);
          }}
        >
          <source src={eventDecorToast} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Grid container spacing={2}>
        {[eventDecorTable1, eventDecorTable2].map(
          (
            src,
            index // First row of 2 images
          ) => (
            <Grid item xs={6} key={`row1-${index}`}>
              <Box
                component="img"
                src={src}
                alt={`Event table decor large ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "6/5",
                }} // Adjust aspect ratio
              />
            </Grid>
          )
        )}
      </Grid>
      <Grid container spacing={2} sx={{ mt: { xs: 0, sm: -0.25 } }}>
        {" "}
        {/* Slight negative margin for overlap if needed, or just remove mt if spacing is fine */}
        {[eventDecorTable3, eventDecorTable4].map(
          (
            src,
            index // Second row of 2 images
          ) => (
            <Grid item xs={6} key={`row2-${index}`}>
              <Box
                component="img"
                src={src}
                alt={`Event table decor small ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "6/5",
                }} // Adjust aspect ratio
              />
            </Grid>
          )
        )}
      </Grid>
    </Container>
  );
};

export default MyWorkEventDecorSection;
