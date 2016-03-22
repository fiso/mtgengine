"use strict";
const Permanent = require("./Permanent");

class Creature extends Permanent {
	constructor (game, owner, controller, card, power, toughness) {
		super(game, owner, controller, card);
		this._attacking = null;
		this._basePower = power;
		this._baseToughness = toughness;
		this._blockers = [];
	}

	resetBlockers () {
		this._blockers = [];
	}

	set attacking (value) {
		this._attacking = value;
	}

	get attacking () {
		return this._attacking;
	}

	isAttacking () {
		return !!this._attacking;
	}

	get power () {
		return this._basePower;
	}

	get toughness () {
		return this._baseToughness;
	}

	get blocked () {
		return this._blockers.length > 0;
	}
}

module.exports = Creature;
