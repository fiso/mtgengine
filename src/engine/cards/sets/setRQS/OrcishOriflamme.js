"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../setEMA/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor (game) {
    super(game, "Orcish Oriflamme", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = OrcishOriflamme;
