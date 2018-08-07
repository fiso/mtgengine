"use strict";
const Constants = require ("../../../Constants");
const LandTaxBase = require("../setBBD/LandTax");

class LandTax extends LandTaxBase {
  constructor (game) {
    super(game, "Land Tax", "Masters Edition III", "ME3");
  }
}

module.exports = LandTax;
