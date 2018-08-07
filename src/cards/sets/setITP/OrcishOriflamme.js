"use strict";
const Constants = require ("../../../Constants");
const OrcishOriflammeBase = require("../setEMA/OrcishOriflamme");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor (game) {
    super(game, "Orcish Oriflamme", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = OrcishOriflamme;
