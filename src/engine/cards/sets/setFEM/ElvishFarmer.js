"use strict";
const Constants = require ("../../../Constants");
const ElvishFarmerBase = require("../setME2/ElvishFarmer");

class ElvishFarmer extends ElvishFarmerBase {
  constructor (game) {
    super(game, "Elvish Farmer", "Fallen Empires", "FEM");
  }
}

module.exports = ElvishFarmer;
