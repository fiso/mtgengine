"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../setEMA/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor (game) {
    super(game, "Orcish Oriflamme", "Limited Edition Beta", "LEB");
  }
}

module.exports = OrcishOriflamme;
