import md5 from 'md5';
import {ROUTES} from '../main/configs/constants';
import {api} from '../main/configs/common.handlers';

describe('LoginController', function loginControllerTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#login()', () => {

        it('it should send lower case username and MD5 encoded password', tc.itShouldSendLowerCaseUsernameAndMD5EncodedPassword);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldSendLowerCaseUsernameAndMD5EncodedPassword
    };

    function beforeEach(done) {
        angular.mock.module('app');

        inject(($rootScope, $controller, _$httpBackend_) => {
            this.$httpBackend = _$httpBackend_;
            this.ctrl = $controller('LoginController');
            this.ctrl.$onInit();

            this.$httpBackend.when('GET', api(ROUTES.getUserByToken)).respond(200);

            done();
        })
    }

    function afterEach() {
    }

    function itShouldSendLowerCaseUsernameAndMD5EncodedPassword(done) {
        this.ctrl.username = 'AdMiN';
        this.ctrl.password = 'qwerty';

        this.$httpBackend
            .when('POST', '/api/login')
            .respond((method, url, data) => {
                const body = JSON.parse(data);

                assert.equal(body.username, this.ctrl.username.toLowerCase());
                assert.equal(body.password, md5(this.ctrl.password));

                done();
            });

        this.ctrl.login();

        this.$httpBackend.flush();
    }
}
