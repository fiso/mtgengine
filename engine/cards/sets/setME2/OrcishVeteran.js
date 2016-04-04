"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishVeteranBase = require("../setFEM/OrcishVeteran.js");

class OrcishVeteran extends OrcishVeteranBase {
  constructor(game) {
    super(game, "Orcish Veteran", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishVeteran;
