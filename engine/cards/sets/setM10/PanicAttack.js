"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PanicAttackBase = require("../set8ED/PanicAttack.js");

class PanicAttack extends PanicAttackBase {
  constructor(game) {
    super(game, "Panic Attack", "Magic 2010", "M10");
  }
}

module.exports = PanicAttack;
