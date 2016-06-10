"use strict";
const Constants = require ("../../../Constants");
const PanicAttackBase = require("../set8ED/PanicAttack");

class PanicAttack extends PanicAttackBase {
  constructor (game) {
    super(game, "Panic Attack", "Magic 2010", "M10");
  }
}

module.exports = PanicAttack;
