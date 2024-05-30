import { style } from "@vanilla-extract/css";
import Container from "../Container/container";

export const StyleSectionIdeas = style({
    paddingTop: '12.8rem',

})

export const IdeaContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "h3": {
        textAlign: 'center',
        marginBottom: '6.4rem',
        letterSpacing: '-0.12rem',
        maxWidth: '53.5rem'
    },
    "ul": {
       display: 'flex',
       borderBottom: '1px solid var(--gray-800)',
       gap: '3.2rem',
       paddingBottom: '12.8rem'
    }
})

export const itemCardDigital = style({
    flex: 1,
    width: '100%',
    maxWidth: '38.4rem',
    ".icon": {
        width: '4rem',
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.6rem'
    },
    ".info": {
        "h6": {
            marginBottom: '.8rem',

        },
        "p": {
            color: 'var(--gray-600)'
        }
    },
})