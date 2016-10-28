describe('HomePageController', function homePageControllerTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#onInit()', () => {

        it('it should contain user property', tc.itShouldContainUserProperty);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldContainUserProperty
    };

    function beforeEach(done) {
        angular.mock.module('app');

        this.user = {
            username: 'admin',
            isAdmin: true
        };

        inject(($rootScope, $controller) => {
            this.ctrl = $controller('HomePageController', {
                user: {
                    data: {
                        user: this.user
                    }
                }
            });
            this.ctrl.$onInit();

            done();
        });
    }

    function afterEach() {

    }

    function itShouldContainUserProperty(done) {
        assert.deepEqual(this.ctrl.user, this.user);
        done();
    }
}