var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require ("../Constants");

function CardCopy(game) {
	MTGObject.call(this, game);
}

_.extend(CardCopy.prototype, MTGObject.prototype, {
	constructor: CardCopy
});

module.exports = CardCopy;
