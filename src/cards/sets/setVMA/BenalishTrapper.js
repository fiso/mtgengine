"use strict";
const Constants = require ("../../../Constants");
const BenalishTrapperBase = require("../setINV/BenalishTrapper");

class BenalishTrapper extends BenalishTrapperBase {
  constructor (game) {
    super(game, "Benalish Trapper", "Vintage Masters", "VMA");
  }
}

module.exports = BenalishTrapper;
