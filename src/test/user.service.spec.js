import 'angular-mocks';
import 'sinon';

// import chai from 'chai';
//
// const assert = chai.assert;

describe('UserService', () => {
    let userService;

    beforeEach((done) => {
        module('app');

        inject(function (_userService_) {
            userService = _userService_;

            done();
        });
    });

    describe('#getUser()', () => {

        it('it should return authToken', (done) => {

            userService
                .login({username: 'test', password: 'test'})
                .then((res) => {
                    console.log(res);
                    done();
                });

        });

    });
});