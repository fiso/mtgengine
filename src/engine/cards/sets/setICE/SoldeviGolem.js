"use strict";
const Constants = require ("../../../Constants");
const SoldeviGolemBase = require("../setME4/SoldeviGolem");

class SoldeviGolem extends SoldeviGolemBase {
  constructor (game) {
    super(game, "Soldevi Golem", "Ice Age", "ICE");
  }
}

module.exports = SoldeviGolem;
