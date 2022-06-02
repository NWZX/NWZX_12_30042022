/* eslint-disable */

export interface IUser {
    main?: IUserMain;
    activity?: IUserActivity;
    avgSession?: IUserAvgSession;
    performance?: IUserPerformance;
}

export interface IUserMain {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
}
export interface IUserActivity {
    userId: number;
    sessions: {
        day: string;
        kilogram: number;
        calories: number;
    }[];
}
export interface IUserAvgSession {
    userId: number;
    sessions: {
        day: number;
        sessionLength: number;
    }[];
}
export interface IUserPerformance {
    userId: number;
    kind: Record<number, string>;
    data: {
        value: number;
        kind: number;
    }[];
}
