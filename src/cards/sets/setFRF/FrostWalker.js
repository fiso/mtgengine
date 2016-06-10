"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostWalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Frost Walker", "Fate Reforged", "FRF");
  }
}

module.exports = FrostWalker;
