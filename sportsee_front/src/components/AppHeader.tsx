import { Flex, HStack, Link } from '@chakra-ui/react';
import React from 'react';
import IconLogo from '../icons/Logo';

interface Props {}

const AppHeader: React.VFC<Props> = () => {
    return (
        <Flex id="header" as={'header'} fontFamily={'Roboto'} w={'100%'} h={91} bgColor={'#020203'} px={'5%'}>
            <HStack
                fontSize={[12, 24]}
                lineHeight={'142.6%'}
                w={'100%'}
                justifyContent="space-between"
                color={'primary.main'}
            >
                <IconLogo color={'primary.main'} w={['178px']} h={['61px']} />
                <Link href={'/'} color={'white'}>
                    Accueil
                </Link>
                <Link href={'/profil'} color={'white'}>
                    Profil
                </Link>
                <Link href={'/settings'} color={'white'}>
                    Réglage
                </Link>
                <Link href={'/community'} color={'white'}>
                    Communauté
                </Link>
            </HStack>
        </Flex>
    );
};

export default AppHeader;
