"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExperimentalAviator extends UnimplementedCard {
  constructor (game) {
    super(game, "Experimental Aviator", "Kaladesh", "KLD");
  }
}

module.exports = ExperimentalAviator;
