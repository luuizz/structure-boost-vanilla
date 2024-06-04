import { style } from "@vanilla-extract/css";
import { vars } from "@/app/variables.css";

export const HeaderStyle = style({
    width: "100%",
    display: "flex",
    padding: "2rem 0px",
    alignItems: "center",
    transition: "all 0.3s ease 0s",
    position: "fixed",
    zIndex: 2023,
    backgroundColor: vars.gray[900],
    "&.fixed": {
        padding: "1.4rem 0px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.24)",
    },
    ".container": {
        ".hamburger-react": {
            display: "none"
        },
    },
    '@media': {
        "(max-width: 991px)": {
            ".container": {
                ".hamburger-react": {
                    display: "block",
                    "div": {
                        height: "2px !important",
                    }
                }
            }
        }
    }
})

export const HeaderContainer = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

export const NavHeader = style({
    display: "flex",
    alignItems: "center",
    gap: 32,
    '@media': {
        '(max-width: 991px)': {
            display: 'none'
        }
    }
})

export const LinksHeader  = style({
    display: "flex",
    gap: 40,
    flexDirection: "row",
    listStyle: "none",
})

export const LinkStyle = style({
    color: vars.gray[100],
    fontSize: "1.6rem",
    fontWeight: 400,
    transition: "opacity .3s ease",
    fontFamily: "var(--font-satoshi)",
    ":hover": {
        opacity: .5,
    }
})

export const asideMenuStyle = style({
    padding: "6.4rem 0px",
    width: "100%",
    height: `calc(100vh - ${vars.headerHeight})`,
    backgroundColor: vars.black,
    opacity: 0,
    pointerEvents: "none",
    top: vars.headerHeight,
    transition: "all 0.3s ease 0s",
    transform: "translateY(100%)",
    zIndex: 50,
    position: "fixed",
    "&.open": {
        pointerEvents: "all",
        opacity: 1,
        transform: "translateY(0px)",
    },
    ".container": {
        "nav": {
            "ul": {
                flexDirection: "column",
                marginBottom: "4rem",
                "li": {
                    "a": {
                        fontSize: "3rem",
                    }
                }
            }
        }
    }
})