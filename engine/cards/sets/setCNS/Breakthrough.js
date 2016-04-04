"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Breakthrough extends UnimplementedCard {
  constructor(game) {
    super(game, "Breakthrough", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Breakthrough;
