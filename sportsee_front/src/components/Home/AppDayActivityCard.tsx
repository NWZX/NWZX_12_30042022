import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IUserActivity } from '../../interfaces/IUser';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts/types/component/Tooltip';

interface Props extends Omit<Partial<IUserActivity>, 'userId'> {
    isLoading?: boolean;
}

const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): JSX.Element | undefined => {
    if (active && payload && payload.length) {
        return (
            <Box bg={'#E60000'} px={'8px'} py={'16px'} color={'#FFF'}>
                <VStack gap={'16px'}>
                    <Box>{`${payload?.[0].payload.kg}kg`}</Box>
                    <Box>{`${payload?.[0].payload.cal}Kcal`}</Box>
                </VStack>
            </Box>
        );
    }
};

const AppDayActivityCard: React.VFC<Props> = ({ sessions }) => {
    sessions?.sort((a, b) => {
        return new Date(a.day).getTime() - new Date(b.day).getTime();
    });
    return (
        <Box
            w={'100%'}
            h={'320px'}
            bg={['secondary.main']}
            borderRadius={5}
            boxShadow={['0px 2px 4px rgba(0, 0, 0, 0.0212249)']}
            gap={5}
            p={{ base: '8px', xl: '32px' }}
            alignItems="center"
            position={'relative'}
        >
            <Text
                position={'absolute'}
                top={{ base: '12px', xl: '32px' }}
                left={'5%'}
                fontSize={15}
                fontWeight={500}
                lineHeight={'24px'}
                color={'#20253A'}
            >
                Activité quotidienne
            </Text>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={sessions?.map((session) => {
                        return {
                            kg: session.kilogram,
                            cal: session.calories,
                            name: new Date(session.day).getUTCDate(),
                        };
                    })}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis dataKey="cal" orientation="right" type="number" axisLine={false} tickLine={false} />
                    <Tooltip content={customTooltip} />
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} />
                    <Bar name="Poids (kg)" dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar
                        name="Calories brûlées (kCal)"
                        dataKey="cal"
                        fill="#E60000"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default AppDayActivityCard;
