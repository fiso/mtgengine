"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Electrickery extends UnimplementedCard {
  constructor (game) {
    super(game, "Electrickery", "Return to Ravnica", "RTR");
  }
}

module.exports = Electrickery;
