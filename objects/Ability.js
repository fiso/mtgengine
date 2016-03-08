var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require ("../Constants");

function Ability(game) {
	MTGObject.call(this, game);
}

_.extend(Ability.prototype, MTGObject.prototype, {
	constructor: Ability
});

module.exports = Ability;
