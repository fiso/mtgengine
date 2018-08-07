"use strict";
const Constants = require ("../../../Constants");
const OrcishCannonadeBase = require("../setDDN/OrcishCannonade");

class OrcishCannonade extends OrcishCannonadeBase {
  constructor (game) {
    super(game, "Orcish Cannonade", "Conspiracy", "CNS");
  }
}

module.exports = OrcishCannonade;
