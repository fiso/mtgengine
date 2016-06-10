"use strict";
const Constants = require ("../../../Constants");
const OrcishCaptainBase = require("../setFEM/OrcishCaptain");

class OrcishCaptain extends OrcishCaptainBase {
  constructor (game) {
    super(game, "Orcish Captain", "Fifth Edition", "5ED");
  }
}

module.exports = OrcishCaptain;
