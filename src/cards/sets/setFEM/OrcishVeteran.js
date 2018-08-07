"use strict";
const Constants = require ("../../../Constants");
const OrcishVeteranBase = require("../setME2/OrcishVeteran");

class OrcishVeteran extends OrcishVeteranBase {
  constructor (game) {
    super(game, "Orcish Veteran", "Fallen Empires", "FEM");
  }
}

module.exports = OrcishVeteran;
