import {ROUTES} from '../main/configs/constants';
import {api} from '../main/configs/common.handlers';


describe('UserService', function userServiceTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#getUser()', () => {

        it('it should return authToken', tc.itShouldReturnAuthToken);
        it('it should fail when password is wrong', tc.itShouldFailWhenPasswordIsWrong);
        it('it should fail when username is wrong', tc.itShouldFailWhenUsernameIsWrong);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldReturnAuthToken,
        itShouldFailWhenPasswordIsWrong,
        itShouldFailWhenUsernameIsWrong
    };

    function beforeEach(done) {
        angular.mock.module('app');

        inject((_userService_, _$httpBackend_) => {
            this.userService = _userService_;
            this.$httpBackend = _$httpBackend_;

            this.$httpBackend.when('GET', api(ROUTES.getUserByToken)).respond(200);

            done();
        });
    }

    function afterEach() {
        this.$httpBackend.verifyNoOutstandingExpectation();
        this.$httpBackend.verifyNoOutstandingRequest();
    }

    function itShouldReturnAuthToken(done) {
        const token = 'q3e5a4sd6qwe3e5qw163q24we3a5';

        this.$httpBackend.when('POST', api(ROUTES.login)).respond({authToken: token});

        this.userService
            .login()
            .then((res) => {

                assert.equal(res.data.authToken, token);

                done();
            });

        this.$httpBackend.flush();
    }

    function itShouldFailWhenPasswordIsWrong(done) {
        this.$httpBackend.when('POST', api(ROUTES.login)).respond(403);

        this.userService
            .login()
            .catch((res) => {
                assert.equal(res.status, 403);
                done();
            });

        this.$httpBackend.flush();
    }

    function itShouldFailWhenUsernameIsWrong(done) {
        this.$httpBackend.when('POST', api(ROUTES.login)).respond(403);

        this.userService
            .login()
            .catch((res) => {
                assert.equal(res.status, 403);
                done();
            });

        this.$httpBackend.flush();
    }
}
