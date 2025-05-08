import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import videoFestiveDecor from "../assets/BeachHotel.mp4";
import videoBrownsGastro from "../assets/Browns.mp4";
import videoFbConcept from "../assets/isClinical.mp4";
import videoLkInterior from "../assets/LKInterior.mp4";

const videoItems = [
  {
    src: videoLkInterior,
    client: "LK Interior",
    desc: "Brand video for an interior design agency",
  },
  {
    src: videoBrownsGastro,
    client: "Browns Gastro bar",
    desc: "Atmospheric video capturing the vibe of the bar",
  },
  {
    src: videoFestiveDecor,
    client: "Festive Decoration",
    desc: "Birthday event decor & ambiance showcase",
  },
  {
    src: videoFbConcept,
    client: "fb.concept",
    desc: "Massage treatment showcase for a beauty salon",
  },
];

const MyWorkVideosSection = () => {
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
          Videos
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {videoItems.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box
              component="video"
              src={item.src}
              controls
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                aspectRatio: "4/3",
                mb: 1,
                backgroundColor: "black",
              }}
            />
            <Typography
              variant="smallCaps"
              component="p"
              sx={{ textAlign: "center" }}
            >
              CLIENT
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ textAlign: "center", fontWeight: "bold", mb: 0.5 }}
            >
              {item.client}
            </Typography>
            <Divider sx={{ my: 0.5, mx: "auto", width: "60%" }} />
            <Typography
              variant="body2"
              component="p"
              sx={{
                textAlign: "center",
                color: "text.secondary",
                fontSize: "0.9rem",
              }}
            >
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MyWorkVideosSection;
