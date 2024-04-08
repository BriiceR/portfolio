// 
import { keyframes } from '@emotion/react'

export const colors = {
    backgorund: '#282828',
    primary: '#9E77F5',
    secondary: '#FAF8FF',

    text_dark: '#282828',
    text_light: '#FAF8FF',
    text_violet: '#9E77F5',
};

export const radius = {
    small: '5px',
    medium: '10px',
    large: '30px',
    max: '1000px',
}

export const fontSize = {
    mobileButton: '1.2em',
    mobileSubTitle: '1.4em',
    mobileTitle: '2.4em',

    text: '1.2em',
    button: '1.8em',
    subTitle: '2em',
    title: '3.6em',
}

const breakpointsMax = [499, 768, 999, 1630];    
export const mediaMax = breakpointsMax.map((bp) => `@media (max-width: ${bp}px)`);
const breakpointsMin = [500, 768, 1000, 1629];
export const mediaMin = breakpointsMin.map((bp) => `@media (min-width: ${bp}px)`);


export const bounce = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }

    40%, 43% {
        transform: translate3d(0, -20px, 0);
    }

    70% {
        transform: translate3d(0, -10px, 0);
    }

    90% {
        transform: translate3d(0,-4px,0);
    }
`