"use strict";
const Constants = require ("../../../Constants");
const LandTaxBase = require("../setBRB/LandTax");

class LandTax extends LandTaxBase {
  constructor(game) {
    super(game, "Land Tax", "Legends", "LEG");
  }
}

module.exports = LandTax;
