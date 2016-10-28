'use strict';

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

// run functions
import {onStateChangeError} from './configs/state-events.handler';
import registerAngularBusy from './components/angular-busy/angular-busy.run';

// vendor
import vendorModule from './vendor';

const moduleName = angular
    .module('app', [vendorModule])
    .config(routeConfig)
    .config(langConfig)
    .config(stateConfig)
    .config(interceptorConfig)
    .controller('LoginController', LoginController)
    .controller('HomePageController', HomePageController)
    .service('userService', userService)
    .factory('httpRequestInterceptor', httpRequestInterceptor)
    .run(onStateChangeError)
    .run(registerAngularBusy)
    .name;


export default angular.bootstrap(document, [moduleName])