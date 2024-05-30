import { keyframes, style } from "@vanilla-extract/css";
import stroke from "@/assets/stroke.svg"

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
    paddingTop: 113,
    position: "relative",
    overflowX: "hidden",
    "::after": {
        content: "",
        backgroundColor: "var(--pink-10)",
        width: "100%",
        height: "22rem",
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: -1
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
    }
})

export const TextHero = style({
    maxWidth: "55.6rem",
    marginBottom: "3.2rem",
    letterSpacing: "-0.054rem",
    color: "var(--gray-300)",
    fontSize: "1.8rem"
})

export const IllustraHeroDesk = style({
    margin: "6.4rem auto 0"
})