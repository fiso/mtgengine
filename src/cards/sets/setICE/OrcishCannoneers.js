"use strict";
const Constants = require ("../../../Constants");
const OrcishCannoneersBase = require("../setDKM/OrcishCannoneers");

class OrcishCannoneers extends OrcishCannoneersBase {
  constructor (game) {
    super(game, "Orcish Cannoneers", "Ice Age", "ICE");
  }
}

module.exports = OrcishCannoneers;
