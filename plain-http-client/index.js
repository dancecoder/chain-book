export function apiFactory(url) {
    return new Proxy(new ApiClient(url), ApiHandler);
}

export class ApiClientError extends Error {
    /**
     * @param {Response} response
     * */
    constructor(response) {
        super();
        this.message = response.statusMessage;
        this.name = 'ApiClientError';
        this.response = response;
    }

    inspect() {
        return this.toString();
    }

    toString() {
        return `ApiClientError: ${this.response.url} -- ${this.response.statusText}`;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return null;
    }
    [Symbol.toStringTag]() {
        return '[object ApiClientError]';
    }
}

class ApiClient {

    constructor(url) {
        this.url = url;
    }

    /**
     * @param {Record<string, string | number>>} query
     * @param {RequestInit} init optional
     */
    async get(query, init = {}) {
        const response = await fetch(this.url, { method: 'GET', ...init });
        if (response.ok) {
            return response;
        }
        throw new ApiClientError(response);
    }

    /**
     * @param {Record<string, string | number>>} query
     * @param {RequestInit} init optional
     * @return {Record<string, any>}
     */
    async getJson(query, init = {}) {
        const response = await this.get(query, init);
        const json = await response.json();
        return json;
    }
}

/**
 * @implements {ProxyHandler<any>>}
 */
const ApiHandler = {

    /**
     * @param {ApiClient} target
     * @param {string} property
     * @param {any} receiver
     * @return {any}
     */
    get(target, property, receiver) {
        if (target[property] == null) {
            return (arg) => new Proxy(new ApiClient(`${target.url}/${property}/${arg}`), ApiHandler);
        }
        const prop = target[property];
        return prop instanceof Function ? prop.bind(target) : prop;
    }

}
