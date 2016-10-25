import {API_PREFIX, AUTH_TOKEN_VAR_NAME} from './constants';

export function api(url, setAuthTokenParam = false) {
    return setAuthTokenParam
        ? `${API_PREFIX}${url}?${AUTH_TOKEN_VAR_NAME}=${localStorage.getItem(AUTH_TOKEN_VAR_NAME)}`
        : API_PREFIX.concat(url);
}