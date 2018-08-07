"use strict";
const Constants = require ("../../../Constants");
const BeastAttackBase = require("../setDDS/BeastAttack");

class BeastAttack extends BeastAttackBase {
  constructor (game) {
    super(game, "Beast Attack", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = BeastAttack;
