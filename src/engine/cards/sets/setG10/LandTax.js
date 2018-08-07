"use strict";
const Constants = require ("../../../Constants");
const LandTaxBase = require("../setBBD/LandTax");

class LandTax extends LandTaxBase {
  constructor (game) {
    super(game, "Land Tax", "Judge Gift Cards 2010", "G10");
  }
}

module.exports = LandTax;
