"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishFarmerBase = require("../set5ED/OrcishFarmer.js");

class OrcishFarmer extends OrcishFarmerBase {
  constructor(game) {
    super(game, "Orcish Farmer", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishFarmer;
