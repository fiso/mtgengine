"use strict";
const Constants = require ("../../../Constants");
const BenalishTrapperBase = require("../setVMA/BenalishTrapper");

class BenalishTrapper extends BenalishTrapperBase {
  constructor (game) {
    super(game, "Benalish Trapper", "Invasion", "INV");
  }
}

module.exports = BenalishTrapper;
