import { IUser, IUserActivity, IUserAvgSession, IUserMain, IUserPerformance } from '../interfaces/IUser';

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
 * Get
 * @param apiRoute
 * @param id
 * @param hasActivity
 * @param hasAvgSession
 * @param hasPerformance
 * @returns
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
