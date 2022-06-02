import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import IconFooter1 from '../icons/IconFooter1';
import IconFooter2 from '../icons/IconFooter2';
import IconFooter3 from '../icons/IconFooter3';
import IconFooter4 from '../icons/IconFooter4';

interface Props {}

const AppFooter: React.VFC<Props> = () => {
    return (
        <VStack
            id="footer"
            as={'footer'}
            fontFamily={'Roboto'}
            w={117}
            h={'100%'}
            bgColor={'black'}
            gap={4}
            position={'fixed'}
            justifyContent={'center'}
            top={0}
            zIndex={-1}
        >
            <IconFooter1 color={'primary.main'} w={'64px'} h={'64px'} />
            <IconFooter2 color={'primary.main'} w={'64px'} h={'64px'} />
            <IconFooter3 color={'primary.main'} w={'64px'} h={'64px'} />
            <IconFooter4 color={'primary.main'} w={'64px'} h={'64px'} />
            <Text
                fontSize={[12]}
                color={'white'}
                fontWeight={'500'}
                lineHeight={'24px'}
                textAlign="center"
                transform={'rotate(90deg)'}
                position={'absolute'}
                width={'max-content'}
                bottom={'110px'}
            >
                Copiryght, SportSee 2020
            </Text>
        </VStack>
    );
};

export default AppFooter;
