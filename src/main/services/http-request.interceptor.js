import {AUTH_TOKEN_VAR_NAME} from '../configs/constants';

export default function httpRequestInterceptor() {
    return {
        request: interceptRequest
    };

    function interceptRequest(config) {
        const authToken = localStorage.getItem(AUTH_TOKEN_VAR_NAME);

        if (authToken) {
            config.headers[AUTH_TOKEN_VAR_NAME] = authToken;
        }

        return config;
    }
}