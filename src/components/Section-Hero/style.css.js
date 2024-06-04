import { keyframes, style } from "@vanilla-extract/css";
import stroke from "@/assets/stroke.svg"
import illustraMobile from "@/assets/illustra-mobile.svg"
import { vars } from "@/app/variables.css";

const drawLine = keyframes({
    '0%': {
        width: 0,
    },
    '100%': {
        width: '100%',
    }
})

export const StyleSectionHero = style({
    width: "100%",
    paddingTop: "calc(20.1rem)",
    position: "relative",
    overflowX: "hidden",
    "::after": {
        content: "",
        backgroundColor: vars.pink[10],
        width: "100%",
        height: "22rem",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1
    },
    '@media': {
        '(max-width: 1200px)': {
            "::after": {
                height: "13rem"
            },
        },
        '(max-width: 768px)': {
            paddingTop: "calc(14.8rem)"
        },
        '(max-width: 560px)': {
            paddingTop: "calc(17.6rem)",
        }
    }
})

export const ContainerHeroStyle = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column"
})

export const ContentStyle = style({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 719,
    position: "relative",
})

export const TitleHero = style({
    fontWeight: 600,
    marginBottom: '24px',
    position: "relative",
    fontSize: '56px',
    "::before": {
        content: "",
        height: "2.2rem",
        position: "absolute",
        backgroundImage: `url(${stroke.src})`,
        backgroundSize: "cover",
        bottom: "-0.6rem",
        left: "3.9rem",
        width: "719px",
        zIndex: -1,
        animation: `${drawLine} 1s .5s ease-in forwards`
    },
    '@media': {
        '(max-width: 768px)': {
            maxWidth: "49rem",
            margin: "0 auto",
            "::before": {
                left: 0,
                bottom: "-0.4rem",
                width: "49.9rem",
                backgroundSize: "100%",
            }
        },
        '(max-width: 560px)': {
            fontSize: "4rem",
            "::before": {
                width: "36.9rem"
            }
        }
    }
})

export const TextHero = style({
    maxWidth: "55.6rem",
    marginBottom: "3.2rem",
    letterSpacing: "-0.054rem",
    color: "var(--gray-300)",
    fontSize: "1.8rem",
    '@media': {
        '(max-width: 768px)': {
            maxWidth: "41.6rem",
        },
        '(max-width: 560px)': {
            fontSize: "1.6rem",
            margin: ".8rem 0 2.4rem",
        }
    }
})

export const IllustraHeroDesk = style({
    margin: "6.4rem auto 0",
    '@media': {
        '(max-width: 560px)': {
            content: `url(${illustraMobile.src})`,
            margin: 0,
            marginTop: "6.4rem"
        }
    }
})