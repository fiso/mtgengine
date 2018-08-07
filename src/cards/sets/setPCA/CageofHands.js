"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CageofHands extends UnimplementedCard {
  constructor (game) {
    super(game, "Cage of Hands", "Planechase Anthology", "PCA");
  }
}

module.exports = CageofHands;
