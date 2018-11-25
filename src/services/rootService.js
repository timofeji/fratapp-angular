import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:3000';

const encode = encodeURIComponent;
export const resBody = res => res.body;

let token = null;

const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
    req.set('Content-Type', 'application/json');
}

export const setToken = (_token) => token = _token;

export const requests = {
    del: async url =>
        superagent.del(`${API_ROOT}${url}`).use(tokenPlugin),
    get: async url =>
        superagent.get(`${API_ROOT}${url}`).use(tokenPlugin),
    put: async (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin),
    post: async (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin)
};

