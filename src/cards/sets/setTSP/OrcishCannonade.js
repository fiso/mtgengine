"use strict";
const Constants = require ("../../../Constants");
const OrcishCannonadeBase = require("../setDDN/OrcishCannonade");

class OrcishCannonade extends OrcishCannonadeBase {
  constructor (game) {
    super(game, "Orcish Cannonade", "Time Spiral", "TSP");
  }
}

module.exports = OrcishCannonade;
