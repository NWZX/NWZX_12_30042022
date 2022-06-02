import { extendTheme } from '@chakra-ui/react';
const appTheme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
            main: '#ff0101',
            50: '#ffe2e2',
            100: '#ffb1b2',
            200: '#ff7f7f',
            300: '#ff4d4d',
            400: '#fe1d1b',
            500: '#e50501',
            600: '#b30000',
            700: '#810000',
            800: '#4f0000',
            900: '#200000',
        },
        secondary: {
            main: '#F7F7F7',
            ghost: '#E3E3E3',
            50: '#f2f2f2',
            100: '#d9d9d9',
            200: '#bfbfbf',
            300: '#a6a6a6',
            400: '#8c8c8c',
            500: '#737373',
            600: '#595959',
            700: '#404040',
            800: '#262626',
            900: '#0d0d0d',
        },
    },
});
export default appTheme;
