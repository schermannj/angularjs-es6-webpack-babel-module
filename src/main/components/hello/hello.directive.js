import {HelloDirectiveCtrl, helloDirectiveLinkFunc} from './hello.controller';

function helloDirective() {

    return {
        template: `<h1>Hello, {{vm.user.username}}</h1>`,
        controller: HelloDirectiveCtrl,
        controllerAs: 'vm',
        restrict: 'E',
        scope: {},
        bindToController: {
            user: '='
        },
        link: helloDirectiveLinkFunc
    };
}

export default angular
    .module('helloDirective', [])
    .directive('hello', helloDirective)
    .name;