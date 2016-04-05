"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrapinFlames extends UnimplementedCard {
  constructor(game) {
    super(game, "Wrap in Flames", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WrapinFlames;
