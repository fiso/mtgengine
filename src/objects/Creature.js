"use strict";
const Permanent = require("./Permanent");

class Creature extends Permanent {
	constructor (game, owner, controller, card, power, toughness) {
		super(game, owner, controller, card);
		this._attacking = null;
		this._basePower = power;
		this._baseToughness = toughness;
		this._blockers = [];
		this._blocking = [];
		this._maxCreaturesToBlock = 1;
	}

	get power () {
		let power = this._basePower;
		power += this.getCountersOfType(Constants.counterTypes.PLUS_ONE_PLUS_ONE);
		power -= this.getCountersOfType(Constants.counterTypes.MINUS_ONE_MINUS_ONE);
		return power;
	}

	get toughness () {
		let toughness = this._baseToughness;
		toughness += this.getCountersOfType(Constants.counterTypes.PLUS_ONE_PLUS_ONE);
		toughness -= this.getCountersOfType(Constants.counterTypes.MINUS_ONE_MINUS_ONE);
		return toughness;
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

	get blocked () {
		return this._blockers.length > 0;
	}

	resetBlocking () {
		this._blocking = [];
	}

	startBlocking (attacker) {
		if (this._blocking.indexOf(attacker) !== -1) {
			this._game.log("Warning: startBlocking called twice for the same attacker");
			return;
		}

		if (this._blocking.length >= this._maxCreaturesToBlock) {
			return false;
		}

		this._blocking.push(attacker);
		return true;
	}

	stopBlocking (attacker) {
		let index = this._blocking.indexOf(attacker);
		assert(index !== -1);
		this._blocking.splice(index, 1);
	}

	isBlocking () {
		return this._blocking.length > 0;
	}
}

module.exports = Creature;
