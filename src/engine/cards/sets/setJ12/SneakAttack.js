"use strict";
const Constants = require ("../../../Constants");
const SneakAttackBase = require("../setEMA/SneakAttack");

class SneakAttack extends SneakAttackBase {
  constructor (game) {
    super(game, "Sneak Attack", "Judge Gift Cards 2012", "J12");
  }
}

module.exports = SneakAttack;
