"use strict";
const Constants = require ("../../../Constants");
const SacredNectarBase = require("../set8ED/SacredNectar");

class SacredNectar extends SacredNectarBase {
  constructor(game) {
    super(game, "Sacred Nectar", "Seventh Edition", "7ED");
  }
}

module.exports = SacredNectar;
