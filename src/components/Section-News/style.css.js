import { style } from "@vanilla-extract/css";

export const StyleSectionNewsletter = style({
    padding: "8.9rem 0",
    background: "var(--pink-10)",
    ".container": {
        textAlign: "center",
        "h2": {
            maxWidth: "64.6rem",
            margin: "0 auto",
            letterSpacing: "-0.144rem",
            marginBottom: "1.6rem"
        },
        "p": {
            maxWidth: "68.7rem",
            letterSpacing: "-0.066rem",
            margin: "0 auto",
            marginBottom: "2.4rem"
        }
    }
})