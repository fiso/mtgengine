"use strict";
const Constants = require ("../../../Constants");
const PanicAttackBase = require("../setM10/PanicAttack");

class PanicAttack extends PanicAttackBase {
  constructor (game) {
    super(game, "Panic Attack", "Prophecy", "PCY");
  }
}

module.exports = PanicAttack;
