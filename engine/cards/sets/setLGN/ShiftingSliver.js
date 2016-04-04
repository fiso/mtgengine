"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiftingSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Shifting Sliver", "Legions", "LGN");
  }
}

module.exports = ShiftingSliver;
