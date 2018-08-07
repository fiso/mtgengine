"use strict";
const Constants = require ("../../../Constants");
const LandTaxBase = require("../setBBD/LandTax");

class LandTax extends LandTaxBase {
  constructor (game) {
    super(game, "Land Tax", "Legends", "LEG");
  }
}

module.exports = LandTax;
