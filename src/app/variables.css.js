import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root', {
    pink: {
        10: '#F67ACB',
        20: '#CF62A9',
        30: '#9D457F',
    },
    gray: {
        100: '#F5F6FA',
        200: '#DFE1E8',
        300: '#C0C3CC',
        400: '#ABAFBA',
        500: '#979BA6',
        600: '#787C87',
        700: '#5C5F69',
        800: '#393B42',
        900: '#0A0B0D',
    },
    white: '#fff',
    black: '#000',
    headerHeight: '7.68rem',
    lineHeight: {
        short: '120%',
        base: '150%',
      },
})