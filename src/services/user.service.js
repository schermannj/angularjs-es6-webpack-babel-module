import {api} from '../configs/common.handlers';
import {ROUTES} from '../configs/constants';

/*@ngInject*/
export default function userService($http) {

    return {
        login: login,
        logout: logout,
        getUser: getUser,
        createUser: createUser
    };

    function getUser() {
        return $http({
            method: 'GET',
            url: api(ROUTES.getUserByToken)
        });
    }

    function login(credentials) {
        return $http({
            method: 'POST',
            url: api(ROUTES.login),
            data: credentials
        })
    }

    function logout(username) {
        return $http({
            method: 'GET',
            url: api(ROUTES.logout),
            params: {
                username
            }
        })
    }

    function createUser(user) {
        return $http({
            method: 'POST',
            url: api(ROUTES.createUser),
            data: user
        })
    }
}