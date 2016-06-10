"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrudgeKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Grudge Keeper", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GrudgeKeeper;
