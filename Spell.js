var Constants = require("./Constants");
var Utils = require("./Utils");
var Events = require("./Events");
var Outputs = require("./Outputs");

function Spell(game, controller, card, targets) {
	Utils.assert(game);
	this._controller = controller;
	this._card = card;
	this._targets = targets;
}

Spell.prototype = {
	resolve: function () {
		this._card.resolve(this._targets);
	}
};

module.exports = Spell;
