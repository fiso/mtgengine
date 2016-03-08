var AssertionFailed = function () {
};

module.exports = {
	assert: function (condition) {
		if (!condition) {
			throw new AssertionFailed();
		}
	}
};
