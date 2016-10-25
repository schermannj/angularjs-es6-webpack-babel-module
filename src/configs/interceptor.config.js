/*@ngInject*/
export default function interceptorConfig($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
}