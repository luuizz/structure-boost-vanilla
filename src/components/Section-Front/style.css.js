import { style } from "@vanilla-extract/css";

export const CardPostStyle = style({
    border: "2px solid rgba(255,255,255,.08)",
    background: "rgba(255,255,255,.02)",
    padding: "2.4rem",
    ":first-child": {
        gridColumn: "span 2",
    },
    ".image": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5.65rem"
    },
    ".text": {
        width: "100%",
        maxWidth: "48.2rem",
        "h6": {
            letterSpacing: "-0.066rem",
            marginBottom: ".8rem"
        },
        "p": {
            fontSize: "1.6rem",
            letterSpacing: "-0.048rem",
            color: "var(--gray-600)",
        }
    },
    '@media': {
        '(max-width: 1200px)': {
            ":first-child": {
                gridColumn: "span 3",
            },
            "&:nth-child(2)": {
                gridColumn: "span 3"
            }
        },
        '(max-width: 991px)': {
            ":first-child": {
                gridColumn: "initial",
            },
            "&:nth-child(2)": {
                gridColumn: "initial",
            }
        }
    }
})

export const StyleSectionFront  = style({
    padding: "6rem 0"
})


export const TitleTextFront = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "6.4rem",
    "p": {
        color: "var(--gray-600)",
        letterSpacing: "-0.054rem"
    },
    ".left": {
        maxWidth: "53.9rem",
        "h3": {
            letterSpacing: "-0.12rem",
            fontWeight: "700",
        },
        "p": {
            maxWidth: "45.2rem",
            marginTop: "1.6rem",
        }
    },
    ".right": {
        maxWidth: "42.9rem",

    },
    '@media': {
        '(max-width:991px)': {
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4rem",
            ".left": {
                textAlign: "center",
                maxWidth: "100%",
                "p": {
                    marginTop: "0.8rem",
                    maxWidth: "100%",
                }
            },
            ".right": {
                textAlign: "center",
                maxWidth: "100%",
            }
        }
    }
})

export const AllItemsStyle = style({
    display: "grid",
    gridGap: "3.2rem",
    gridTemplateColumns: "repeat(3, 1fr)",
    '@media': {
        '(max-width: 1200px)': {
            gridGap: "1.6rem"
        },
        '(max-width: 991px)': {
            gridTemplateColumns: "1fr",
        },
        '(max-width: 560px)': {
            gridGap: "3.2rem"
        }
    }
})

export const tagStyle = style({
    display: "inline-block",
    borderRadius: "10rem",
    background: "rgba(255,255,255,.1)",
    color: "var(--gray-100)",
    textAlign: "center",
    fontSize: "1.4rem",
    padding: "0.8rem 2.2rem",
    lineHeight: "100%",
    letterSpacing: ".126rem",
    textTransform: "uppercase",
    marginBottom: "4.6rem",
    fontFamily: "var(--font-satoshi)",
    fontWeight: "700"
})