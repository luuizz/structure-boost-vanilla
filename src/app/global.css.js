import { globalStyle, createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

const styles = [
    { tag: 'h1', fontSize: '5.6rem' },
    { tag: 'h2', fontSize: '4.8rem' },
    { tag: 'h3', fontSize: '4rem' },
    { tag: 'h4', fontSize: '2.4rem' },
    { tag: 'h5', fontSize: '2.2rem' },
    { tag: 'h6', fontSize: '2rem' } 
]

styles.forEach(style => {
    globalStyle(style.tag, {
      fontSize: style.fontSize
    });
  });

globalStyle(
    '*', {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        WebkitFontSmoothing: 'antialiased'
})
    
globalStyle('html, body', {
    fontSize: '62.5%',
    overflowX: 'hidden'
})

globalStyle('body', {
    backgroundColor: 'var(--gray-900)',
    color: 'var(--white)',
    "&::-webkit-scrollbar": {
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: "var(--gray-800)",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--pink-10)",
    }
})

globalStyle('img', {
    maxWidth: '100%',
    display: 'block'
})

globalStyle('a', {
    display: 'inline-block',
    textDecoration: 'none',
})

globalStyle('button', {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer'
})

globalStyle('::selection', {
   backgroundColor: 'var(--pink-10)',
   color: 'var(--gray-900)'
})

globalStyle('ul', {
    listStyle: 'none'
})

globalStyle('.container', {
    width: "100%",
    maxWidth: "124.6rem",
    margin: "0 auto",
    padding: "0 1.5rem",
})

globalStyle('h1, h2, h3, h4, h5, h6', {
    fontFamily: "var(--font-satoshi)",
    lineHeight: "120%"
})

globalStyle('p, span', {
    fontFamily: "var(--font-inter)",
    lineHeight: "150%"
})

globalStyle('p', {
    fontSize: '1.8rem',
    lineHeight: '150%'
})

globalStyle(':root', {
    '--pink-10': '#F67ACB',
    '--pink-20': '#CF62A9',
    '--pink-30': '#9D457F',
    '--gray-100': '#F5F6FA',
    '--gray-200': '#DFE1E8',
    '--gray-300': '#C0C3CC',
    '--gray-400': '#ABAFBA',
   ' --gray-500': '#979BA6',
    '--gray-600': '#787C87',
    '--gray-700': '#5C5F69',
    '--gray-800': '#393B42',
    '--gray-900': '#0A0B0D',
    '--black': '#000',
    '--white': '#fff',
    '--header-height': '7.68rem'
})