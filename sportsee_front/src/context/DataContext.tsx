import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { getLocalData } from '../data/LocalData';
import { getRemoteData } from '../data/RemoteData';
import { IUser } from '../interfaces/IUser';

interface IDataContext {
    apiRoute?: string;
    user?: { data: IUser; timestamp: number };
}

const initialState: IDataContext = {
    apiRoute: undefined,
    user: undefined,
};

type TActionType = 'user';
interface IReducerAction {
    type: TActionType;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: Record<string, any>;
}

function reducer(state: IDataContext, action: IReducerAction): IDataContext {
    console.log('reducer', action);
    switch (action.type) {
        case 'user':
            return { ...state, ...action.payload };
        default:
            throw new Error();
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataContext = createContext<[IDataContext, (type: TActionType, payload?: Record<string, any>) => void]>([
    initialState,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    () => {},
]);

/**
 * Provider for the Data Fetching Method
 * @param param0 {apiRoute?: string; children: ReactNode}
 * @returns {JSX.Element}
 */
export const DataContextProvider = ({
    children,
    apiRoute,
}: {
    children: ReactNode;
    apiRoute?: string;
}): JSX.Element => {
    const [data, dispatchData] = useReducer(reducer, { ...initialState, apiRoute: apiRoute });

    return (
        <DataContext.Provider value={[data, (t, p) => dispatchData({ type: t, payload: p })]}>
            {children}
        </DataContext.Provider>
    );
};

type TUserContext = [user?: IUser, isLoading?: boolean, error?: Error];
/**
 * Public Entry Point to Fetch User Data
 * @param id id of the user to fetch
 * @param hasActivity Should the user have an activity?
 * @param hasAvgSession Should the user have an average session?
 * @param hasPerformance Should the user have a performance?
 * @returns {TUserContext}
 */
export const useUserContext = (
    id: number,
    hasActivity?: boolean,
    hasAvgSession?: boolean,
    hasPerformance?: boolean,
): TUserContext => {
    const [context, dispatch] = useContext(DataContext);
    const [user, setUser] = React.useState<IUser>();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<Error | undefined>();

    useEffect(() => {
        if (context.user && context.user.timestamp - Date.now() < 60000) {
            setUser(context.user.data);
        } else if (!isLoading && !error) {
            setIsLoading(true);
            (async () => {
                try {
                    const { main, activity, avgSession, performance } = context.apiRoute
                        ? await getRemoteData(context.apiRoute, id, hasActivity, hasAvgSession, hasPerformance)
                        : await getLocalData();
                    setIsLoading(false);
                    dispatch('user', {
                        user: { data: { main, activity, avgSession, performance } as IUser, timestamp: Date.now() },
                    });
                } catch (error) {
                    setIsLoading(false);
                    setError(error as Error);
                }
            })();
        }
    }, [context.apiRoute, context.user, dispatch, error, hasActivity, hasAvgSession, hasPerformance, id, isLoading]);

    return [user, isLoading, error];
};
