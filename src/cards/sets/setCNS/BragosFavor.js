"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BragosFavor extends UnimplementedCard {
  constructor (game) {
    super(game, "Brago's Favor", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BragosFavor;
