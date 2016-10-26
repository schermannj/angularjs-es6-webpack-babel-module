import HomePageComponentCtrl from './home-page.controller';
import './home-page.component.scss';

const HomePageComponent = {
    template: require('./home-page.template.html'),
    controller: HomePageComponentCtrl,
    controllerAs: 'vm',
    bindings: {
        user: '<'
    }
};

export default angular
    .module('homePageModule', [])
    .component('homePageComponent', HomePageComponent)
    .name;