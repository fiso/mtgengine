"use strict";
const Constants = require ("../../../Constants");
const OrcishCannoneersBase = require("../setME2/OrcishCannoneers");

class OrcishCannoneers extends OrcishCannoneersBase {
  constructor (game) {
    super(game, "Orcish Cannoneers", "Deckmasters", "DKM");
  }
}

module.exports = OrcishCannoneers;
