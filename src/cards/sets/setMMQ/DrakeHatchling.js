"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrakeHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Drake Hatchling", "Mercadian Masques", "MMQ");
  }
}

module.exports = DrakeHatchling;
