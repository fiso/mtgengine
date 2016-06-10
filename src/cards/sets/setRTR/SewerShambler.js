"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SewerShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Sewer Shambler", "Return to Ravnica", "RTR");
  }
}

module.exports = SewerShambler;
