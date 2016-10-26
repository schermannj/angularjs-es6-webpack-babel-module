/*@ngInject*/
export default function langConfig($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('escape');
}