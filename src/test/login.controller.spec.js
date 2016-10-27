describe('LoginController', function loginControllerTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#login()', () => {

        // it('it should be true', tc.checkVariable);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach
    };

    function beforeEach() {
        angular.mock.module('app');

        inject(($rootScope, $controller) => {
            this.controller = $controller('LoginController');
            this.controller.$onInit();
        })
    }

    function afterEach() {
    }


}
