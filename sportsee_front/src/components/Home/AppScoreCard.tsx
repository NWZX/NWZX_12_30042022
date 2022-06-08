import { Box, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

interface Props {
    score: number;
}

const AppScoreCard: React.VFC<Props> = ({ score }) => {
    const [isXLarge] = useMediaQuery('(min-width: 80em)');
    return (
        <Box
            w={'100%'}
            h={{ base: '200px', xl: '263px' }}
            bg={['secondary.main']}
            borderRadius={5}
            boxShadow={['0px 2px 4px rgba(0, 0, 0, 0.0212249)']}
            gap={5}
            p={{ base: '8px', xl: '32px' }}
            alignItems="center"
            position={'relative'}
        >
            <Text position={'absolute'} top={'5%'} left={'5%'} fontSize={15} fontWeight={500} lineHeight={'24px'}>
                Score
            </Text>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={500}>
                    <Pie
                        data={[
                            {
                                name: 'score',
                                score: score,
                                fill: '#FF0000',
                            },
                            {
                                name: 'noscore',
                                score: 1 - score,
                                fill: '#FBFBFB',
                            },
                        ]}
                        dataKey="score"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={isXLarge ? 90 : 45}
                        outerRadius={isXLarge ? 100 : 55}
                        startAngle={90}
                        endAngle={450}
                        cornerRadius={10}
                        fill="#FF0000"
                    />
                </PieChart>
            </ResponsiveContainer>
            <Text
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%, -50%)'}
                fontSize={{ base: 16, xl: 26 }}
                fontWeight={700}
                lineHeight={'26px'}
            >
                {score * 100}%
                <br />
                <Text as={'span'} fontSize={{ base: 12, xl: 16 }} fontWeight={500} lineHeight={0} color={'#74798C'}>
                    de votre
                    <br />
                    objectif
                </Text>
            </Text>
        </Box>
    );
};

export default AppScoreCard;
