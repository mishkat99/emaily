// decide what set of credentials to return

if (process.ENV.NODE_NEV === 'production') {
	module.exports = require('./prod');
} else {
	module.exports = require('./dev');
}