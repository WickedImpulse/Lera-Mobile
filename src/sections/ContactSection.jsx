/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Grid, Typography, useTheme } from "@mui/material"; //
import {
  default as contactCarSide,
  default as contactGreyCoat,
} from "../assets/contact1.JPG";

const ContactSection = () => {
  const theme = useTheme(); // Use theme for divider color

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box sx={{ textAlign: "right", mb: 4 }}>
        <Typography
          variant="smallCaps"
          component="p"
          sx={{ letterSpacing: "0.1em" }}
        >
          LET'S DO THIS!
        </Typography>
      </Box>

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={contactCarSide}
            alt="Model by car"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
              aspectRatio: "3/4",
              display: { xs: "block", md: "block" },
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: { xs: "auto", md: "100%" },
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              lineHeight: 1.2,
              fontSize: { xs: "2.5rem", md: "3rem" },
              mb: { xs: 2, md: 0 },
            }}
          >
            READY <br />
            TO WORK <br />
            WITH ME?
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            component="img"
            src={contactGreyCoat}
            alt="Model in grey coat"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              maxHeight: "600px",
              objectFit: "cover",
              aspectRatio: "3/4",
              display: { xs: "block", md: "block" },
            }}
          />
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          mt: { xs: 2, md: 6 },
          pt: 4,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="smallCaps"
          component="p"
          sx={{ fontSize: "0.7rem", mb: 0.5 }}
        >
          EMAIL ME AT
        </Typography>
        <Typography variant="body2" component="p" sx={{ mb: 1 }}>
          LERAMIV.OFFICIAL@GMAIL.COM
        </Typography>
        <Typography
          variant="smallCaps"
          component="p"
          sx={{ fontSize: "0.7rem", mb: 0.5 }}
        >
          WHATSAPP +38 063 27 14 119
        </Typography>
        <Typography
          variant="smallCaps"
          component="p"
          sx={{ fontSize: "0.7rem", mb: 0.5 }}
        >
          GERMAN NUMBER +49 173 3621063
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactSection;
