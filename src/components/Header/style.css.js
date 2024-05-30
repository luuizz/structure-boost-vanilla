import { style } from "@vanilla-extract/css";

export const HeaderStyle = style({
    width: "100%",
    height: 88,
    padding: "2rem 0",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid rgba(255,255,255,.24)",
})

export const HeaderContainer = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})

export const NavHeader = style({
    display: "flex",
    alignItems: "center",
    gap: 32
})

export const LinksHeader  = style({
    display: "flex",
    gap: 40,
    flexDirection: "row",
    listStyle: "none",
})

export const LinkStyle = style({
    color: "var(--gray-100)",
    fontSize: "1.6rem",
    fontWeight: 400,
    transition: "opacity .3s ease",
    fontFamily: "var(--font-satoshi)",
    ":hover": {
        opacity: .5,
    }
})