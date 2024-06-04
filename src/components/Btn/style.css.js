import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@/app/variables.css";

const baseButton = style({
    display: "inline-block",
    transition: "all .3s ease",
    lineHeight: "100%",
    fontFamily: "var(--font-satoshi)",
    fontWeight: "700"
})

export const variantBtn = styleVariants({
    lg: [
        baseButton, {
            backgroundColor: vars.pink[10],
            fontSize: "1.8rem",
            padding: "2.3rem 2.4rem",
            color: vars.gray[900],
            ':hover': {
                backgroundColor: vars.pink[20]
            }
        }
    ],
    white: [
        baseButton, {
            backgroundColor: vars.white,
            padding: "2.3rem 2.4rem",
            fontSize: "1.8rem",
            color: vars.gray[900],
            ':hover': {
                backgroundColor: vars.gray[900],
                color: vars.white
            }
        }
    ],
    default: [
        baseButton, {
            backgroundColor: vars.pink[10],
            fontSize: "1.6rem",
            padding: "1.6rem 2.4rem",
            color: vars.gray[900],
            ':hover': {
                backgroundColor: vars.white
            }
        }
    ]
})