"use strict";
const Constants = require ("../../../Constants");
const OrcishCaptainBase = require("../setFEM/OrcishCaptain");

class OrcishCaptain extends OrcishCaptainBase {
  constructor (game) {
    super(game, "Orcish Captain", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishCaptain;
