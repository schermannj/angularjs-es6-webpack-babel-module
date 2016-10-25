import md5 from 'md5';
import {AUTH_TOKEN_VAR_NAME, STATES} from '../../configs/constants';
import './login-page.controller.scss';

/*@ngInject*/
export default function LoginCtrl($state, userService, toaster) {

    return {
        $onInit: $onInit,
        login: login
    };

    function $onInit() {
    }

    function login() {
        let passwordMd5;
        let username;

        if (this.password && this.username) {
            passwordMd5 = md5(this.password);
            username = this.username.toLowerCase();
        }

        userService
            .login({
                username: username,
                password: passwordMd5
            })
            .then((response) => {
                localStorage.setItem(AUTH_TOKEN_VAR_NAME, response.data.authToken);
                $state.go(STATES.home);
            })
            .catch((error) => {
                toaster.warning('Login fail', error.data.error);
            });
    }

}