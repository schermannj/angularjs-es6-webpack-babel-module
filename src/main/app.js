'use strict';

// angular and other global libraries
import angular from 'angular';
import uirouter from 'angular-ui-router';
import translate from 'angular-translate';
import toaster from 'angularjs-toaster';
import ngAnimate from 'angular-animate';
import uibootstrap from 'angular-ui-bootstrap';
import smartTable from 'angular-smart-table';
import 'angular-busy';
import 'bootstrap/dist/js/bootstrap.min.js';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'angularjs-toaster/toaster.scss';
import 'angular-busy/angular-busy.css';

// local configuration files
import routeConfig from './configs/route.config';
import langConfig from './configs/lang.config';
import stateConfig from './configs/state.config';
import interceptorConfig from './configs/interceptor.config';

// controllers
import LoginController from './controllers/login/login-page.controller';
import HomePageController from './controllers/home-page/home-page.controller';

// services
import userService from './services/user.service';
import httpRequestInterceptor from './services/http-request.interceptor';

// components and directives
import homePageComponent from './components/home-page/home-page.component';
import helloDirective from './components/hello/hello.directive';

// run functions
import {onStateChangeError} from './configs/state-events.handler';
import registerAngularBusy from './components/angular-busy/angular-busy.run';

// filters
import upperCaseFilterFunction from './common/filters/upper-case.filter';

const moduleName = angular
    .module('app', [
        uirouter,
        translate,
        toaster,
        ngAnimate,
        uibootstrap,
        smartTable,
        'cgBusy',
        homePageComponent,
        helloDirective
    ])
    .config(routeConfig)
    .config(langConfig)
    .config(stateConfig)
    .config(interceptorConfig)
    .controller('LoginController', LoginController)
    .controller('HomePageController', HomePageController)
    .service('userService', userService)
    .factory('httpRequestInterceptor', httpRequestInterceptor)
    .filter('upperCase', upperCaseFilterFunction)
    .run(onStateChangeError)
    .run(registerAngularBusy)
    .name;


export default angular.bootstrap(document, [moduleName])