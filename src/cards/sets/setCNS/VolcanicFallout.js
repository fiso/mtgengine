"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolcanicFallout extends UnimplementedCard {
  constructor (game) {
    super(game, "Volcanic Fallout", "Conspiracy", "CNS");
  }
}

module.exports = VolcanicFallout;
