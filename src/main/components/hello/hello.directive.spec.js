describe('HelloDirective', function helloDirectiveTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#directive', () => {

        it('it should display right text', tc.itShouldDisplayRightText);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldDisplayRightText
    };

    function beforeEach(done) {
        angular.mock.module('helloDirective');

        inject(($compile, $rootScope) => {
            this.user = {username: 'admin'};
            this.scope = $rootScope.$new();

            this.element = $compile('<hello user="user"></hello>')(this.scope);

            done();
        });
    }

    function afterEach() {
    }

    function itShouldDisplayRightText(done) {
        this.scope.user = this.user;
        this.scope.$digest();

        assert.equal(this.element.find('h1').text(), 'Hello, admin');

        done();
    }
}