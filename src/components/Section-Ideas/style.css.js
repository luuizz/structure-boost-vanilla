import { style } from "@vanilla-extract/css";
import Container from "../Container/container";

export const StyleSectionIdeas = style({
    paddingTop: '12.8rem',
    '@media': {
        '(max-width: 1200px)': {
            paddingTop: "6.8rem",
        },
        '(max-width: 560px)': {
            paddingTop: "8rem",
        }
    }
})

export const IdeaContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "h3": {
        textAlign: 'center',
        marginBottom: '6.4rem',
        letterSpacing: '-0.12rem',
        maxWidth: '53.5rem'
    },
    "ul": {
       display: 'flex',
       borderBottom: '1px solid var(--gray-800)',
       gap: '3.2rem',
       paddingBottom: '12.8rem'
    },
    "@media": {
        '(max-width: 991px)': {
            "ul": {
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "3.2rem"
            },
        },
        '(max-width: 560px)': {
            "h3": {
                fontSize: "2.8rem"
            },
            "ul": {
                paddingBottom: "8rem",
                gap: "6.4rem"
            }
        }
    }
})

export const itemCardDigital = style({
    flex: 1,
    width: '100%',
    maxWidth: '38.4rem',
    ".icon": {
        width: '4rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.6rem'
    },
    ".info": {
        "h6": {
            marginBottom: '.8rem',

        },
        "p": {
            color: 'var(--gray-600)'
        }
    },
    '@media': {
        '(max-width: 1200px)': {
            ".info": {
                "p": {
                    fontSize: "1.6rem",
                }
            }
        },
        '(max-width: 991px)': {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            ".info": {
                "p": {
                    fontSize: "1.8rem"
                }
            }
        },
    }
})