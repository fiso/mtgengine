"use strict";
const Constants = require ("../../../Constants");
const SoldeviGolemBase = require("../setICE/SoldeviGolem");

class SoldeviGolem extends SoldeviGolemBase {
  constructor (game) {
    super(game, "Soldevi Golem", "Masters Edition IV", "ME4");
  }
}

module.exports = SoldeviGolem;
