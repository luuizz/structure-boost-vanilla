import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./variables.css";

const globalStyles = {
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      WebkitFontSmoothing: 'antialiased',
    },
    'html, body': {
      fontSize: '62.5%',
      overflowX: 'hidden',
    },
    'body': {
      backgroundColor: vars.gray[900],
      color: vars.white,
      "&::-webkit-scrollbar": {
        width: "0.5rem",
        height: "0.5rem",
        backgroundColor: vars.gray[800],
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: vars.pink[10],
      },
    },
    'img': {
      maxWidth: '100%',
      display: 'block',
    },
    'a': {
      display: 'inline-block',
      textDecoration: 'none',
    },
    'button': {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
    },
    '::selection': {
      backgroundColor: vars.pink[10],
      color: vars.gray[900],
    },
    'ul': {
      listStyle: 'none',
    },
    '.container': {
      width: "100%",
      maxWidth: "124.6rem",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: "var(--font-satoshi)",
      lineHeight: "120%",
    },
    'p, span': {
      fontFamily: "var(--font-inter)",
      lineHeight: "150%",
    },
    'p': {
      fontSize: '1.8rem',
      lineHeight: '150%',
    },
  };
  
  const headingStyles = [
    { tag: 'h1', fontSize: '5.6rem' },
    { tag: 'h2', fontSize: '4.8rem' },
    { tag: 'h3', fontSize: '4rem' },
    { tag: 'h4', fontSize: '2.4rem' },
    { tag: 'h5', fontSize: '2.2rem' },
    { tag: 'h6', fontSize: '2rem' },
  ];
  
  headingStyles.forEach(style => {
    globalStyles[style.tag] = { fontSize: style.fontSize };
  });
  
  for (const selector in globalStyles) {
    globalStyle(selector, globalStyles[selector]);
  }  