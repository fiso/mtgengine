"use strict";
const Constants = require ("../../../Constants");
const BeastAttackBase = require("../setDDS/BeastAttack");

class BeastAttack extends BeastAttackBase {
  constructor (game) {
    super(game, "Beast Attack", "Odyssey", "ODY");
  }
}

module.exports = BeastAttack;
