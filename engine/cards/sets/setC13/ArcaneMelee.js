"use strict";
const Constants = require ("../../../Constants");
const ArcaneMeleeBase = require("../setAVR/ArcaneMelee");

class ArcaneMelee extends ArcaneMeleeBase {
  constructor(game) {
    super(game, "Arcane Melee", "Commander 2013 Edition", "C13");
  }
}

module.exports = ArcaneMelee;
