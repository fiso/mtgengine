"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThornoftheBlackRose extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorn of the Black Rose", "You Make the Cube", "PZ2");
  }
}

module.exports = ThornoftheBlackRose;
