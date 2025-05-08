import { Box, Container, Grid, Typography } from "@mui/material";
import offerStreet1 from "../assets/offer1.JPG"; // Replace
import offerStreet2 from "../assets/offer2.JPG";

const offers = [
  {
    title: "Wedding Photography & Videography",
    description:
      "Genuine emotions, elegant details, and the magic of your special day.",
  },
  {
    title: "Brand & Business Shoots",
    description:
      "High-quality visuals that showcase your brand's identity and connect with your audience.",
  },
  {
    title: "Portrait & Lifestyle Sessions",
    description:
      "Authentic, atmospheric images that reflect your personality and style.",
  },
  {
    title: "Event Coverage",
    description:
      "From intimate gatherings to grand celebrations, capturing every moment with precision and artistry.",
  },
  {
    title: "Creative Projects",
    description: "Unique, artistic concepts tailored to your vision.",
  },
];

const WhatCanIOfferSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid
        container
        spacing={4}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent={"center"}
      >
        <Grid item xs={12} md={5}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              fontSize: { xs: "2rem", md: "3rem" },
              mb: { xs: "2rem", md: "4rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "block" } }}
            >
              WHAT
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "block" } }}
            >
              {" "}
              CAN I
            </Box>
            <Box
              component="span"
              sx={{ display: { xs: "inline", md: "block" } }}
            >
              {" "}
              OFFER?
            </Box>
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              gap: { xs: 1, md: 2 },
              justifyContent: { xs: "space-between", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={offerStreet1}
              alt="Model on street"
              sx={{
                width: { xs: "48%", md: "100%" },
                height: "auto",
                maxHeight: "500px",
                objectFit: "cover",
                mb: { xs: 0, md: 2 },
                aspectRatio: "4/5",
              }}
            />
            <Box
              component="img"
              src={offerStreet2}
              alt="Model on street full body"
              sx={{
                width: { xs: "48%", md: "100%" },
                height: "auto",
                maxHeight: "500px",
                objectFit: "cover",
                aspectRatio: "4/5",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              pt: { md: 8 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {offers.map((offer, index) => (
              <Box key={index} sx={{ mb: 5 }}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    letterSpacing: "0.2em",
                  }}
                >
                  ~ {offer.title} –
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ pl: 2, fontSize: "1.1rem", letterSpacing: "0.2em" }}
                >
                  {offer.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatCanIOfferSection;
