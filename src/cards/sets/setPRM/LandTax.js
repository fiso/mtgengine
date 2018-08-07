"use strict";
const Constants = require ("../../../Constants");
const LandTaxBase = require("../setBBD/LandTax");

class LandTax extends LandTaxBase {
  constructor (game) {
    super(game, "Land Tax", "Magic Online Promos", "PRM");
  }
}

module.exports = LandTax;
