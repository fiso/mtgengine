"use strict";
const Constants = require ("../../../Constants");
const SneakAttackBase = require("../setEMA/SneakAttack");

class SneakAttack extends SneakAttackBase {
  constructor (game) {
    super(game, "Sneak Attack", "Urza's Saga", "USG");
  }
}

module.exports = SneakAttack;
