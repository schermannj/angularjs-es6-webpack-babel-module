require('babel-register')({
    sourceMaps: false
});

module.exports = [
    require('./user.service.spec.js')
];