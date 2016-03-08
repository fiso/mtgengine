var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Utils = require("../Utils");

function Spell(game, controller, card, targets) {
	MTGObject.call(this, game);
	this._controller = controller;
	this._card = card;
	this._targets = targets;
}

_.extend(Spell.prototype, MTGObject.prototype, {
	constructor: Spell,

	resolve: function () {
		this._card.resolve(this._targets);
	},

	getCost: function () {
		
	}
});

module.exports = Spell;
