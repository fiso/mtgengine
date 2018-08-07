"use strict";
const Constants = require ("../../../Constants");
const ArcaneMeleeBase = require("../setC13/ArcaneMelee");

class ArcaneMelee extends ArcaneMeleeBase {
  constructor (game) {
    super(game, "Arcane Melee", "Avacyn Restored", "AVR");
  }
}

module.exports = ArcaneMelee;
