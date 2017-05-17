describe('health check', function () {

    beforeAll(function (done) {
        this.server = require('../../server.helper.spec').createServer(done);
    });

    it('should return OK', function (done) {
        const options = {
            method: 'GET',
            url: '/health/check'
        };
        this.server.inject(options, function (response) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

});