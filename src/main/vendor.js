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

// local dependencies

// components and directives
import homePageComponent from './components/home-page/home-page.component';
import helloDirective from './components/hello/hello.directive';

// filters
import upperCaseFilterFunction from './common/filters/upper-case.filter';

export default angular
    .module('dependency.vendor', [
        // external dependencies
        uirouter,
        translate,
        toaster,
        ngAnimate,
        uibootstrap,
        smartTable,
        'cgBusy',

        // local dependencies
        homePageComponent,
        helloDirective
    ])
    .filter('upperCase', upperCaseFilterFunction)
    .name;