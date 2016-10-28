import sinon from 'sinon';
import {api} from '../configs/common.handlers';
import {ROUTES, AUTH_TOKEN_VAR_NAME} from '../configs/constants';

describe('HttpRequestInterceptor', function httpRequestInterceptorTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#request()', () => {

        it('it should add AuthToken to headers from local storage', tc.itShouldAddAuthTokenToHeadersFromLocalStorage);
        it('it shouldn\'t add AuthToken to headers when it doesn\'t exist', tc.itShouldNotAddAuthTokenToHeadersIfItDoesNotExist);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldAddAuthTokenToHeadersFromLocalStorage,
        itShouldNotAddAuthTokenToHeadersIfItDoesNotExist
    };

    function beforeEach(done) {
        angular.mock.module('app');

        inject((_userService_, _$httpBackend_, _httpRequestInterceptor_) => {
            this.userService = _userService_;
            this.$httpBackend = _$httpBackend_;
            this.httpRequestInterceptor = _httpRequestInterceptor_;

            this.$httpBackend.when('GET', api(ROUTES.getUserByToken)).respond(200);

            done();
        });
    }

    function afterEach() {
    }

    function itShouldAddAuthTokenToHeadersFromLocalStorage() {
        const authToken = 'qwhnfd9y3ajeeo3121rtwtw52ti';

        const localStorage_getItem_Stub = sinon.stub(localStorage, 'getItem', () => authToken);
        const httpRequestInterceptor_request_Stub = sinon.spy(this.httpRequestInterceptor, 'request');

        this.$httpBackend
            .when('GET', api(ROUTES.logout))
            .respond((method, url, data, headers) => {

                assert.equal(headers[AUTH_TOKEN_VAR_NAME], authToken);

                sinon.assert.called(localStorage_getItem_Stub);
                sinon.assert.called(httpRequestInterceptor_request_Stub);

                localStorage_getItem_Stub.restore();
                httpRequestInterceptor_request_Stub.restore();

                return true;
            });

        this.userService.logout();

        this.$httpBackend.flush();
    }

    function itShouldNotAddAuthTokenToHeadersIfItDoesNotExist() {

        const localStorage_getItem_Stub = sinon.stub(localStorage, 'getItem', () => undefined);
        const httpRequestInterceptor_request_Stub = sinon.spy(this.httpRequestInterceptor, 'request');

        this.$httpBackend
            .when('GET', api(ROUTES.logout))
            .respond((method, url, data, headers) => {

                assert.isUndefined(headers[AUTH_TOKEN_VAR_NAME]);

                sinon.assert.called(localStorage_getItem_Stub);
                sinon.assert.called(httpRequestInterceptor_request_Stub);

                localStorage_getItem_Stub.restore();
                httpRequestInterceptor_request_Stub.restore();

                return true;
            });

        this.userService.logout();

        this.$httpBackend.flush();
    }
}