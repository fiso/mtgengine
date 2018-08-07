"use strict";
const Constants = require ("../../../Constants");
const OrcishFarmerBase = require("../setME2/OrcishFarmer");

class OrcishFarmer extends OrcishFarmerBase {
  constructor (game) {
    super(game, "Orcish Farmer", "Ice Age", "ICE");
  }
}

module.exports = OrcishFarmer;
