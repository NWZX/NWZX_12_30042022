import * as React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import { DataContextProvider } from './context/DataContext';
import appTheme from './theme';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

const apiRoute = process.env.APIROUTE;

export const App = (): JSX.Element => (
    <DataContextProvider apiRoute={apiRoute}>
        <ColorModeScript />
        <ChakraProvider theme={appTheme}>
            <HelmetProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </ChakraProvider>
    </DataContextProvider>
);
