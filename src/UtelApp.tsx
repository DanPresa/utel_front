import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Routes from './routes/Routes';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const UtelApp: React.FC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</Provider>
	);
};

export default UtelApp;
