"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedSeastrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Plated Seastrider", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PlatedSeastrider;
