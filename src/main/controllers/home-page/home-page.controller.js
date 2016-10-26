import './home-page.controller.scss';

/*@ngInject*/
export default function HomePageController(user) {

    return {
        $onInit: $onInit
    };

    function $onInit() {
        this.user = user.data.user;
    }
}