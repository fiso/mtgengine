"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulcatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulcatcher", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Soulcatcher;
