"use strict";
const Permanent = require("./Permanent");

class Creature extends Permanent {
	constructor (game, owner, controller, card, power, toughness) {
		super(game, owner, controller, card);
		this._attacking = false;
		this._basePower = power;
		this._baseToughness = toughness;
	}

	set attacking (value) {
		this._attacking = value;
	}

	get attacking () {
		return this._attacking;
	}

	get power () {
		return this._basePower;
	}

	get toughness () {
		return this._baseToughness;
	}
}

module.exports = Creature;
