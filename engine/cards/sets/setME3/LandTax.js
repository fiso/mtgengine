"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LandTaxBase = require("../setBRB/LandTax.js");

class LandTax extends LandTaxBase {
  constructor(game) {
    super(game, "Land Tax", "Masters Edition III", "ME3");
  }
}

module.exports = LandTax;
