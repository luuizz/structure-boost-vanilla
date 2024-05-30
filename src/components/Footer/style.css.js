import { style } from "@vanilla-extract/css";

export const StyleFooter = style({
    padding: "4.8rem 0",
    ".container": {
        ".main-area": {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,.24)",
            marginBottom: "2.4rem",
            paddingBottom: "6.6rem",
            ".left": {
                maxWidth: "27.9rem",
                "p": {
                    marginTop: "2.4rem",
                    color: "var(--gray-600)",
                    fontSize: "1.6rem",
                    letterSpacing: "-0.048rem"
                }
            },
            ".right": {
                display: "flex",
                flexGrow: "1",
                justifyContent: "space-between",
            }
        },
        ".copy": {
            color: "var(--gray-600)",
            fontSize: "1.6rem",
            letterSpacing: "-0.048rem",
        }
    },
    '@media': {
        '(max-width: 1200px)': {
            ".container": {
                ".right": {
                    maxWidth: "66.2rem",
                }
            }
        },
        "(max-width: 991px)": {
            ".container": {
                ".main-area": {
                    flexDirection: "column",
                    gap: "4rem",
                    ".left": {
                        maxWidth: "100%",
                        textAlign: "center",
                        margin: "0 auto",
                        "img": {
                            margin: "0 auto",
                        },
                    },
                    ".right": {
                        width: "100%",
                        maxWidth: "100%"
                    }
                }
            }
        },
        "(max-width: 560px)": {
            ".container": {
                ".main-area": {
                    paddingBottom: "4.8rem",
                    ".right": {
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4.8rem"
                    }
                },
                ".copy": {
                    textAlign: "center",
                    fontSize: "1.4rem"
                }
            }
        }
    }
})

export const ItemNavFooter = style({
    "h6": {
        fontSize: "1.6rem",
        color: "var(--gray-100)",
        fontFamily: "var(--font-inter)",
        fontWeight: 600,
        letterSpacing: "-0.048rem",
        marginBottom: "3.2rem",
    },
    "ul": {
        "li": {
            fontSize: "1.6rem",
            fontWeight: 400,
            letterSpacing: "-0.048rem",
            "&:not(:last-child)": {
                marginBottom: "3.2rem",
            },
            "a": {
                fontFamily: "var(--font-inter)",
                color: "var(--gray-600)",
                transition: "color .3s ease",
                display: "flex",
                gap: "1.8rem",
                alignItems: "center",
                "&:hover": {
                    color: "var(--white)",
                }
            }
        }
    },
    "@media": {
        "(max-width: 560px)": {
            "ul": {
                "li": {
                    "a": {
                        justifyContent: "center",
                    }
                }
            }
        }
    }
})