"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishOriflammeBase = require("../set6ED/OrcishOriflamme.js");

class OrcishOriflamme extends OrcishOriflammeBase {
  constructor(game) {
    super(game, "Orcish Oriflamme", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = OrcishOriflamme;
