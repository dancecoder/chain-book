export interface ApiQuery {
    [key: string]: string | number | string[] | string[];
}

export interface ApiClientMethodFn {
    (paramOrQuery: string | number | ApiQuery, query?: ApiQuery): ApiClientProxy;
}

export interface ApiClient {
    get(): Promise<Response>;
}

export type ApiClientProxy = ApiClient & {
    [key: string]: ApiClientMethodFn;
}

export function apiFactory(url: string): ApiClientProxy;
