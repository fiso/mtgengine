"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HowlingWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Howling Wolf", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = HowlingWolf;
