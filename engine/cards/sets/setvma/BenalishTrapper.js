"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenalishTrapperBase = require("../setINV/BenalishTrapper.js");

class BenalishTrapper extends BenalishTrapperBase {
  constructor(game) {
    super(game, "Benalish Trapper", "Vintage Masters", "VMA");
  }
}

module.exports = BenalishTrapper;
