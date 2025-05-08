import { Box, Container, Grid, Typography } from "@mui/material";
import headerImage from "../assets/header.JPG";

const MyWorkMoreClientsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      {/* MaxWidth sm for this specific layout */}
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
      <Box
        component="img"
        src={headerImage}
        alt="Client in fur coat"
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          mb: 2,
          aspectRatio: "4/3",
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={7}>
          {" "}
          {/* Left image takes more space */}
          <Box
            component="img"
            src={headerImage}
            alt="Client in car"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "1/1",
            }} // Made it square-ish
          />
        </Grid>
        <Grid item xs={5}>
          {" "}
          {/* Right image */}
          <Box
            component="img"
            src={headerImage}
            alt="Client black and white portrait"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "3/4",
            }} // Portrait
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          {/* Full width bottom image */}
          <Box
            component="img"
            src={headerImage}
            alt="Client in car looking back"
            sx={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              aspectRatio: "4/3",
            }} // Landscape
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyWorkMoreClientsSection;
