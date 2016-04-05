"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodSage extends UnimplementedCard {
  constructor(game) {
    super(game, "Wood Sage", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WoodSage;
