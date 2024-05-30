import { style } from "@vanilla-extract/css";

export const StyledAnimationStairs = style({
    ".transition-container": {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 2025,
        "div": {
            position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "var(--pink-10)",
        }
    },
    ".transition-background": {
        position: "fixed",
        width: "100%",
        height: "100vh",
        backgroundColor: "var(--pink-10)",
        zIndex: 2026,
        pointerEvents: "none",
        top: 0,
        left: 0,
    }
})