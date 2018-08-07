"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../setEMA/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor (game) {
    super(game, "Orcish Oriflamme", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = OrcishOriflamme;
