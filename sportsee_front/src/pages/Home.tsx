import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import AppTop from '../components/AppTop';
import AppContainer from '../components/AppContainer';
import AppInfoCard from '../components/Home/AppInfoCard';
import { useUserContext } from '../context/DataContext';
import AppDayActivityCard from '../components/Home/AppDayActivityCard';
import AppSkillCard from '../components/Home/AppSkillCard';
import AppScoreCard from '../components/Home/AppScoreCard';
import AppAvgSessionCard from '../components/Home/AppAvgSessionCard';
import IconInfo3 from '../icons/IconInfo3';
import IconInfo4 from '../icons/IconInfo4';
import IconInfo2 from '../icons/IconInfo2';
import IconInfo1 from '../icons/IconInfo1';

interface Props {}

const HomePage: React.VFC<Props> = () => {
    const [user] = useUserContext(12, true, true, true);
    return user?.main ? (
        <>
            <AppContainer>
                <AppTop username={user.main.userInfos.firstName} />
                <Grid
                    id="cardCollection"
                    as={'main'}
                    templateColumns={['repeat(12, 1fr)']}
                    gap={['32px']}
                    w={'100%'}
                    mt={16}
                >
                    <GridItem colSpan={9} w="100%" textAlign={'center'}>
                        <Grid templateColumns={['repeat(3, 1fr)']} gap={['32px']}>
                            <GridItem colSpan={3}>
                                <AppDayActivityCard sessions={user.activity?.sessions} />
                            </GridItem>
                            <GridItem>
                                <AppAvgSessionCard sessions={user.avgSession?.sessions} />
                            </GridItem>
                            <GridItem>
                                <AppSkillCard data={user.performance} />
                            </GridItem>
                            <GridItem>
                                <AppScoreCard score={user.main.todayScore} />
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={3} w="100%" textAlign={'center'}>
                        <Flex direction={'column'} h={'100%'} justifyContent="space-between">
                            <AppInfoCard
                                logo={<IconInfo1 w={'60px'} h={'60px'} />}
                                label="Calories"
                                unit="kCal"
                                value={user.main.keyData.calorieCount}
                            />
                            <AppInfoCard
                                logo={<IconInfo2 w={'60px'} h={'60px'} />}
                                label="Proteines"
                                unit="g"
                                value={user.main.keyData.proteinCount}
                            />
                            <AppInfoCard
                                logo={<IconInfo3 w={'60px'} h={'60px'} />}
                                label="Glucides"
                                unit="g"
                                value={user.main.keyData.carbohydrateCount}
                            />
                            <AppInfoCard
                                logo={<IconInfo4 w={'60px'} h={'60px'} />}
                                label="Lipides"
                                unit="g"
                                value={user.main.keyData.proteinCount}
                            />
                        </Flex>
                    </GridItem>
                </Grid>
            </AppContainer>
        </>
    ) : (
        <></>
    );
};

export default HomePage;
