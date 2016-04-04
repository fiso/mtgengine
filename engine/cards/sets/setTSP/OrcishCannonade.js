"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishCannonadeBase = require("../setDDN/OrcishCannonade.js");

class OrcishCannonade extends OrcishCannonadeBase {
  constructor(game) {
    super(game, "Orcish Cannonade", "Time Spiral", "TSP");
  }
}

module.exports = OrcishCannonade;
