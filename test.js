var waitkey = require('./index');
waitkey('space', function() {
	console.log('callback');
});
