"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Runewing extends UnimplementedCard {
  constructor (game) {
    super(game, "Runewing", "Return to Ravnica", "RTR");
  }
}

module.exports = Runewing;
