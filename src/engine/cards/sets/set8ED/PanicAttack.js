"use strict";
const Constants = require ("../../../Constants");
const PanicAttackBase = require("../setM10/PanicAttack");

class PanicAttack extends PanicAttackBase {
  constructor (game) {
    super(game, "Panic Attack", "Eighth Edition", "8ED");
  }
}

module.exports = PanicAttack;
