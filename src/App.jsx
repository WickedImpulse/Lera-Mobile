import { Box } from "@mui/material";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import MyWorkClientsSection from "./sections/MyWorkClientsSection";
import MyWorkEventDecorSection from "./sections/MyWorkEventDecorSection";
import MyWorkMoreClientsSection from "./sections/MyWorkMoreClientsSection";
import MyWorkTwoWomenSection from "./sections/MyWorkTwoWomenSection";
import MyWorkVideosSection from "./sections/MyWorkVideosSection";
import TestimonialSection from "./sections/TestimonialSection";
import WhatCanIOfferSection from "./sections/WhatCanIOfferSection";

function App() {
  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HeroSection />
      <AboutMeSection />
      <WhatCanIOfferSection />
      <MyWorkVideosSection />
      <MyWorkEventDecorSection />
      <MyWorkClientsSection />
      <MyWorkTwoWomenSection />

      <MyWorkMoreClientsSection />
      <TestimonialSection />
      <ContactSection />
      {/* Add a little footer or spacing at the end */}
      <Box sx={{ height: "100px" }} />
    </Box>
  );
}

export default App;
