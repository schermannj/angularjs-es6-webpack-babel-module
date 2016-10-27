import {ROUTES} from '../main/configs/constants';
import {api} from '../main/configs/common.handlers';

describe('UserService', function userServiceTestCase() {

    beforeEach(userServiceBeforeEach.bind(this));
    afterEach(userServiceAfterEach.bind(this));

    describe('#getUser()', () => {

        it('it should return authToken', itShouldReturnAuthToken.bind(this));

    });
});

function userServiceBeforeEach(done) {
    angular.mock.module('app');

    inject((_userService_, _$httpBackend_) => {
        this.userService = _userService_;
        this.$httpBackend = _$httpBackend_;

        done();
    });
}

function userServiceAfterEach() {
    this.$httpBackend.verifyNoOutstandingExpectation();
    this.$httpBackend.verifyNoOutstandingRequest();
}

function itShouldReturnAuthToken(done) {
    const userCredentials = {username: 'test', password: 'test'};
    const token = 'q3e5a4sd6qwe3e5qw163q24we3a5';

    this.$httpBackend.when('GET', api(ROUTES.getUserByToken)).respond({username: 'test', isAdmin: false});
    this.$httpBackend.when('POST', api(ROUTES.login), userCredentials).respond({authToken: token});

    this.userService
        .login(userCredentials)
        .then((res) => {

            assert.equal(res.data.authToken, token);

            done();
        });

    this.$httpBackend.flush();
}