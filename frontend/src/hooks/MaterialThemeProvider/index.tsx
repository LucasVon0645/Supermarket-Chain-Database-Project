// lib
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import MaterialTheme from '../../styles/MaterialUITheme';

const MaterialThemeProvider: React.FC = ({ children }) => {
    return <ThemeProvider theme={MaterialTheme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;