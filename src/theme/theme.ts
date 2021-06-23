import { createMuiTheme } from '@material-ui/core';
import { orange, red, blue, cyan, green } from '@material-ui/core/colors';

const black = '#000';
const white = '#fff';

const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	palette: {
		common: {
			black,
			white,
		},
		primary: {
			contrastText: white,
			main: orange[300],
		},
		secondary: {
			contrastText: white,
			main: blue['A200'],
		},
		info: {
			main: cyan['A400'],
		},
		success: {
			main: green[500],
		},
		error: {
			main: red['A200'],
		},
	},
	typography: {
		fontFamily: 'Roboto',
	},
});

export default theme;
