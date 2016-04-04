"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LandTaxBase = require("../setBRB/LandTax.js");

class LandTax extends LandTaxBase {
  constructor(game) {
    super(game, "Land Tax", "Judge Gift Program", "pJGP");
  }
}

module.exports = LandTax;
