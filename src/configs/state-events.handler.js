import {STATES} from './constants';

/*@ngInject*/
export function onStateChangeError($rootScope, $state) {
    $rootScope.$on('$stateChangeError', () => {
        $state.go(STATES.login);
    });
}