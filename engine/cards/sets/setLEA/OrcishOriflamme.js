"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../set6ED/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor(game) {
    super(game, "Orcish Oriflamme", "Limited Edition Alpha", "LEA");
  }
}

module.exports = OrcishOriflamme;
