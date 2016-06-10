"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlimeMolding extends UnimplementedCard {
  constructor (game) {
    super(game, "Slime Molding", "Return to Ravnica", "RTR");
  }
}

module.exports = SlimeMolding;
