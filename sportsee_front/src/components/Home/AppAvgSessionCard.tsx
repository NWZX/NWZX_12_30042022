import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { TooltipProps } from 'recharts/types/component/Tooltip';
import { IUserAvgSession } from '../../interfaces/IUser';

interface Props extends Omit<Partial<IUserAvgSession>, 'userId'> {
    isLoading?: boolean;
}
const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): JSX.Element | undefined => {
    if (active && payload && payload.length) {
        return <Box bg={'#FFFFFF'} p={'7px'}>{`${payload?.[0].payload.lng} min`}</Box>;
    }
};

const AppAvgSessionCard: React.VFC<Props> = ({ sessions }) => {
    return (
        <Box
            w={'100%'}
            h={{ base: '200px', xl: '263px' }}
            bg={['#FF0000']}
            borderRadius={5}
            boxShadow={['0px 2px 4px rgba(0, 0, 0, 0.0212249)']}
            gap={5}
            p={{ base: '8px', xl: '32px' }}
            alignItems="center"
            position={'relative'}
        >
            <Text
                position={'absolute'}
                width={'50%'}
                textAlign={'left'}
                top={'5%'}
                left={'7.5%'}
                fontSize={15}
                fontWeight={500}
                lineHeight={'24px'}
                color={'#FFFFFF'}
                opacity={0.5}
            >
                Durée moyenne des sessions
            </Text>
            <Box
                position={'absolute'}
                bg={'#000000'}
                w={'32%'}
                h={'100%'}
                top={'50%'}
                left={'84%'}
                transform={'translate(-50%, -50%)'}
                borderRadius={'0 5px 5px 0'}
                opacity={0.1}
            />
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={sessions?.map((session) => {
                        return { day: days[session.day - 1], lng: session.sessionLength };
                    })}
                >
                    <defs>
                        <linearGradient id="gradient" x1="98.81%" y1="0%" x2="18.73%" y2="0%">
                            <stop offset="1.19%" stopColor="#FFFFFF " />
                            <stop offset="81.27%" stopColor="rgba(255, 255, 255, 0.403191)" />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#FFF', style: { opacity: '0.5' } }}
                    />
                    <Tooltip content={customTooltip} />
                    <Line type="natural" dataKey="lng" stroke="url(#gradient)" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default AppAvgSessionCard;
