import { Box, Flex, SkeletonText, Text } from '@chakra-ui/react';
import React from 'react';

interface Props {
    isLoading?: boolean;
    username?: string;
}

const AppTop: React.VFC<Props> = ({ username, isLoading }) => {
    return (
        <Flex
            id="containerTop"
            borderRadius={25}
            textAlign={'justify'}
            w={'100%'}
            direction="column"
            gap={{ base: 8, xl: 10 }}
            marginBottom={{ base: 8, xl: 16 }}
        >
            {isLoading ? (
                <SkeletonText noOfLines={1} />
            ) : (
                <Text color={'black'} fontWeight={'500'} fontSize={{ base: '38px', xl: '48px' }} lineHeight={['24px']}>
                    {'Bonjour '}
                    <Box as="span" color={'primary.main'}>
                        {username || ''}
                    </Box>
                </Text>
            )}
            {isLoading ? (
                <SkeletonText noOfLines={1} />
            ) : (
                <Text color={'black'} fontWeight={'500'} fontSize={{ base: '16px', xl: '18px' }} lineHeight={['24px']}>
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </Text>
            )}
        </Flex>
    );
};

export default AppTop;
