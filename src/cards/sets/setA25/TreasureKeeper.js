"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureKeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Keeper", "Masters 25", "A25");
  }
}

module.exports = TreasureKeeper;
