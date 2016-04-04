"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastAttackBase = require("../setDD3_GVL/BeastAttack.js");

class BeastAttack extends BeastAttackBase {
  constructor(game) {
    super(game, "Beast Attack", "Odyssey", "ODY");
  }
}

module.exports = BeastAttack;
