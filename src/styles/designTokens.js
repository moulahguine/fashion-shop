// Design Tokens for Monito Pets eCommerce
// Single source of truth for colors, typography, and design system values

export const colors = {
  // Primary Brand Colors
  primary: {
    hex: "#003459",
    rgb: "0, 52, 89",
    usage: "brand, primary backgrounds, header background option",
  },

  secondary: {
    hex: "#F7DBA7",
    rgb: "247, 219, 167",
    usage: "primary CTA background, highlight",
  },

  // Semantic Colors
  pinkRed: {
    hex: "#FF564F",
    rgb: "255, 86, 79",
    usage: "error, danger states",
  },

  greenLight: {
    hex: "#34C759",
    rgb: "52, 199, 89",
    usage: "success states",
  },

  orangeShine: {
    hex: "#FF912C",
    rgb: "255, 145, 44",
    usage: "warning, accent",
  },

  blueSea: {
    hex: "#00A7E7",
    rgb: "0, 167, 231",
    usage: "info, accent",
  },

  // Neutral Scale
  neutral: {
    100: {
      hex: "#00171F",
      rgb: "0, 23, 31",
      usage: "deep black/blue for strongest text",
    },
    80: {
      hex: "#242833",
      rgb: "36, 40, 51",
      usage: "strong text",
    },
    60: {
      hex: "#667479",
      rgb: "102, 116, 121",
      usage: "body text",
    },
    40: {
      hex: "#99A2A5",
      rgb: "153, 162, 165",
      usage: "secondary text",
    },
    20: {
      hex: "#CCD1D2",
      rgb: "204, 209, 210",
      usage: "borders, disabled states",
    },
    0: {
      hex: "#EBEEEF",
      rgb: "235, 238, 239",
      usage: "light borders",
    },
    "000": {
      hex: "#FCFCFC",
      rgb: "252, 252, 252",
      usage: "page background",
    },
  },
};

export const typography = {
  fontFamily: {
    primary: "Gilroy",
    fallback: "sans-serif",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },

  // Typography Scale (base = 16px)
  scale: {
    h1: {
      fontSize: "3rem", // 48px
      lineHeight: "1.08",
      letterSpacing: "-0.02em",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.25rem", // 36px
      lineHeight: "1.12",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.875rem", // 30px
      lineHeight: "1.18",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem", // 24px
      lineHeight: "1.25",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.25rem", // 20px
      lineHeight: "1.35",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem", // 16px
      lineHeight: "1.4",
      fontWeight: 500,
    },
    body: {
      fontSize: "1rem", // 16px
      lineHeight: "1.5",
      fontWeight: 400,
    },
    small: {
      fontSize: "0.875rem", // 14px
      lineHeight: "1.4",
      fontWeight: 400,
    },
  },

  // UI Label Styling
  caps: {
    letterSpacing: "0.06em",
    fontWeight: 600,
    textTransform: "uppercase",
  },
};

// Semantic Usage Summary
export const semanticUsage = {
  primaryBrand: colors.primary.hex, // buttons, primary header bg
  accentCTA: colors.secondary.hex, // text on accent should be primary color
  success: colors.greenLight.hex,
  error: colors.pinkRed.hex,
  warning: colors.orangeShine.hex,
  info: colors.blueSea.hex,
  disabled: colors.neutral[20].hex, // or neutral-40 depending on element
};

// Export for easy access
export default {
  colors,
  typography,
  semanticUsage,
};
