"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exploration extends UnimplementedCard {
  constructor (game) {
    super(game, "Exploration", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Exploration;
