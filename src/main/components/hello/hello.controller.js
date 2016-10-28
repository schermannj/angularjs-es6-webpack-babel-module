/*@ngInject*/
export function HelloDirectiveCtrl() {

    return {
        $onInit: $onInit
    };

    function $onInit() {
        console.log(this.user)
    }
}

export function helloDirectiveLinkFunc($scope) {
}