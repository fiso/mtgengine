"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../setEMA/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor (game) {
    super(game, "Orcish Oriflamme", "Starter 2000", "S00");
  }
}

module.exports = OrcishOriflamme;
