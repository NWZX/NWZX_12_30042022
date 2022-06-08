import { Flex, Skeleton, Text, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
    isLoading?: boolean;
    value: number;
    unit: string;
    label: string;
    logo: JSX.Element;
}

const AppInfoCard: React.VFC<Props> = ({ value, unit, label, logo, isLoading }) => {
    return isLoading ? (
        <Skeleton h={120} />
    ) : (
        <Flex
            w={'100%'}
            bg={['secondary.main']}
            borderRadius={5}
            boxShadow={['0px 2px 4px rgba(0, 0, 0, 0.0212249)']}
            gap={5}
            p={{ base: '16px', xl: '32px' }}
            alignItems="center"
        >
            {logo}
            <VStack alignItems={'start'}>
                <Text fontSize={{ base: 15, xl: 20 }} fontWeight={'700'} color={'#282D30'} lineHeight={'24px'}>
                    {value}
                    {unit}
                </Text>
                <Text fontSize={{ base: 12, xl: 14 }} fontWeight={'500'} color={'#74798C'} lineHeight={'24px'}>
                    {label}
                </Text>
            </VStack>
        </Flex>
    );
};

export default AppInfoCard;
