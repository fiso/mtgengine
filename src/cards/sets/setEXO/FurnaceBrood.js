"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceBrood extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace Brood", "Exodus", "EXO");
  }
}

module.exports = FurnaceBrood;
