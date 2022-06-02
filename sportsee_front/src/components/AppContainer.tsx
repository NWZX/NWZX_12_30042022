import { VStack } from '@chakra-ui/react';
import React from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

interface Props {}

const AppContainer: React.FC<Props> = ({ children }) => {
    return (
        <>
            <AppHeader />
            <VStack pl={['calc(117px + 5%)']} pr={['5%']} py={['3%']} gap={[7, 0]} fontFamily={'Roboto'}>
                {children}
            </VStack>
            <AppFooter />
        </>
    );
};

export default AppContainer;
