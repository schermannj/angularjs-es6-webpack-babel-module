describe('UpperCaseFilter', function upperCaseFilterTestCaseRunner() {
    const tc = TestCaseFactory();

    beforeEach(tc.beforeEach);
    afterEach(tc.afterEach);

    describe('#filter()', () => {

        it('it should return upper case text', tc.itShouldReturnUpperCaseText);
        it('it should return empty string', tc.itShouldReturnEmptyString);

    });
});


function TestCaseFactory() {

    return {
        beforeEach,
        afterEach,
        itShouldReturnUpperCaseText,
        itShouldReturnEmptyString
    };

    function beforeEach(done) {
        angular.mock.module('app');

        inject((_$filter_) => {
            this.upperCaseFilter = _$filter_('upperCase');

            done();
        })
    }

    function afterEach() {

    }

    function itShouldReturnUpperCaseText(done) {
        const text = 'supEr coOl Text';

        assert.equal(this.upperCaseFilter(text), text.toUpperCase());

        done();
    }

    function itShouldReturnEmptyString(done) {

        assert.lengthOf(this.upperCaseFilter(''), 0);
        assert.lengthOf(this.upperCaseFilter(), 0);
        assert.lengthOf(this.upperCaseFilter(null), 0);
        assert.lengthOf(this.upperCaseFilter(undefined), 0);

        done();
    }


}