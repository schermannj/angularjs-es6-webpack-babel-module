export default function upperCaseFilterFunction() {
    return function (text) {
        return text ? text.toUpperCase() : '';
    }
}