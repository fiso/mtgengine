"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishCannoneersBase = require("../setDKM/OrcishCannoneers.js");

class OrcishCannoneers extends OrcishCannoneersBase {
  constructor(game) {
    super(game, "Orcish Cannoneers", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishCannoneers;
