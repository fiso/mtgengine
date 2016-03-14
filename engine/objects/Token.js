var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require ("../Constants");

function Token(game) {
	MTGObject.call(this, game);
}

_.extend(Token.prototype, MTGObject.prototype, {
	constructor: Token
});

module.exports = Token;
