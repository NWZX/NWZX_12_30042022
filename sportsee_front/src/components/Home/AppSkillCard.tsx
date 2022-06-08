import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { IUserPerformance } from '../../interfaces/IUser';

interface Props {
    data?: IUserPerformance;
}

const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};
//
const AppSkillCard: React.VFC<Props> = ({ data }) => {
    const [isXLarge] = useMediaQuery('(min-width: 80em)');
    return (
        <Box
            w={'100%'}
            h={{ base: '200px', xl: '263px' }}
            bg={['#282D30']}
            borderRadius={5}
            boxShadow={['0px 2px 4px rgba(0, 0, 0, 0.0212249)']}
            gap={5}
            alignItems="center"
        >
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    outerRadius={isXLarge ? '65%' : '50%'}
                    data={data?.data.map((item) => {
                        return { name: capitalizeFirstLetter(data.kind[item.kind]), value: item.value };
                    })}
                >
                    <PolarAngleAxis dataKey="name" fontSize={isXLarge ? 12 : 10} />
                    <PolarGrid radialLines={false} />

                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default AppSkillCard;
