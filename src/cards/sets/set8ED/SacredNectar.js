"use strict";
const Constants = require ("../../../Constants");
const SacredNectarBase = require("../set9ED/SacredNectar");

class SacredNectar extends SacredNectarBase {
  constructor (game) {
    super(game, "Sacred Nectar", "Eighth Edition", "8ED");
  }
}

module.exports = SacredNectar;
