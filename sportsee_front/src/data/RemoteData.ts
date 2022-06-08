import { IUser, IUserActivity, IUserAvgSession, IUserMain, IUserPerformance } from '../interfaces/IUser';

/**
 * Fetch method for GET requests
 * @param url URL to fetch data from
 * @returns {Promise<T>}
 */
const dataFetch = <T>(url: string): Promise<T> => fetch(url).then<T>((r) => r.json() as Promise<T>);
// const dataPost = <T, D>(url: string, data: D, method: 'POST' | 'PUT' | 'DELETE' = 'POST'): Promise<T> =>
//     fetch(url, {
//         method: method,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     }).then<T>((r) => r.json() as Promise<T>);

interface IFD<T> {
    data: T;
}

/**
 * Get data from the server
 * @param apiRoute API route to get data from
 * @param id ID of the user to get data for
 * @param hasActivity Should the data contain activity data
 * @param hasAvgSession Should the data contain average session data
 * @param hasPerformance Should the data contain performance data
 * @returns {Promise<IUser>}
 */
export async function getRemoteData(
    apiRoute: string,
    id: number,
    hasActivity?: boolean,
    hasAvgSession?: boolean,
    hasPerformance?: boolean,
): Promise<IUser> {
    const parallelFetch: Promise<IFD<unknown>>[] = [dataFetch<IFD<IUserMain>>(apiRoute + `/user/${id}`)];
    hasActivity && parallelFetch.push(dataFetch<IFD<IUserActivity>>(apiRoute + `/user/${id}/activity`));
    hasAvgSession && parallelFetch.push(dataFetch<IFD<IUserAvgSession>>(apiRoute + `/user/${id}/average-sessions`));
    hasPerformance && parallelFetch.push(dataFetch<IFD<IUserPerformance>>(apiRoute + `/user/${id}/performance`));

    const [main, activity, avgSession, performance] = (await Promise.all(parallelFetch)).map((v) => v.data) as [
        IUserMain,
        IUserActivity,
        IUserAvgSession,
        IUserPerformance,
    ];
    return { main, activity, avgSession, performance };
}
