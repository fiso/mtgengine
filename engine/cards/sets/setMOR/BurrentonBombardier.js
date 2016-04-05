"use strict";
const Constants = require ("../../../Constants");
const BurrentonBombardierBase = require("../setDDF/BurrentonBombardier");

class BurrentonBombardier extends BurrentonBombardierBase {
  constructor(game) {
    super(game, "Burrenton Bombardier", "Morningtide", "MOR");
  }
}

module.exports = BurrentonBombardier;
