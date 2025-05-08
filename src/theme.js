import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#F8F5F0", // Main background color
      paper: "#F8F5F0", // Often used for cards, dialogs, etc.
    },
    text: {
      primary: "#6A4C3A", // Main text color
      secondary: "#8c7a6b", // Lighter text or secondary info
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    h2: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    h3: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    h4: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    h5: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    h6: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 700,
      color: "#6A4C3A",
    },
    subtitle1: {
      // For smaller headings or important labels
      fontFamily: '"Playfair Display", "Georgia", serif',
      color: "#6A4C3A",
    },
    body1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      color: "#6A4C3A",
      lineHeight: 1.6,
    },
    // Special style for the italic script-like font
    portfolioScript: {
      fontFamily: '"Playfair Display", "Georgia", serif', // Or a more script-like font if available
      fontStyle: "italic",
      fontSize: "2.5rem", // Adjust as needed
      color: "#6A4C3A",
    },
    smallCaps: {
      // For "CONTENT CREATOR" etc.
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontSize: "0.75rem",
      fontWeight: 500,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      color: "#6A4C3A",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          // Default max width for sections
          // You can adjust this to match the design's content width
          // maxWidth: '900px', // Example
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#D3C9BC", // A slightly lighter brown for dividers
        },
      },
    },
  },
});

export default theme;
