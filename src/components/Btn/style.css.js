import { style, styleVariants } from "@vanilla-extract/css";

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
            backgroundColor: "var(--pink-10)",
            fontSize: "1.8rem",
            padding: "2.3rem 2.4rem",
            color: "var(--gray-900)",
            ':hover': {
                backgroundColor: 'var(--pink-20)'
            }
        }
    ],
    white: [
        baseButton, {
            backgroundColor: "var(--white)",
            padding: "2.3rem 2.4rem",
            fontSize: "1.8rem",
            color: "var(--gray-900)",
            ':hover': {
                backgroundColor: 'var(--gray-900)',
                color: "var(--white)"
            }
        }
    ],
    default: [
        baseButton, {
            backgroundColor: "var(--pink-10)",
            fontSize: "1.6rem",
            padding: "1.6rem 2.4rem",
            color: "var(--gray-900)",
            ':hover': {
                backgroundColor: 'var(--pink-20)'
            }
        }
    ]
})