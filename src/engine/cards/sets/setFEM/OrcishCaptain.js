"use strict";
const Constants = require ("../../../Constants");
const OrcishCaptainBase = require("../setME2/OrcishCaptain");

class OrcishCaptain extends OrcishCaptainBase {
  constructor (game) {
    super(game, "Orcish Captain", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishCaptain;
