"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Hatchling", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DarkHatchling;
