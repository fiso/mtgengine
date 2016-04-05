"use strict";
const Constants = require ("../../../Constants");
const BeastAttackBase = require("../setDD3_GVL/BeastAttack");

class BeastAttack extends BeastAttackBase {
  constructor(game) {
    super(game, "Beast Attack", "Odyssey", "ODY");
  }
}

module.exports = BeastAttack;
