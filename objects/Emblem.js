var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require ("../Constants");

function Emblem(game) {
	MTGObject.call(this, game);
}

_.extend(Emblem.prototype, MTGObject.prototype, {
	constructor: Emblem
});

module.exports = Emblem;
