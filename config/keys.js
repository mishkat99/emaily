// decide what set of credentials to return

if (process.ENV.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}