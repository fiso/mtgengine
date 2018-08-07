"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Coral Merfolk", "Welcome Deck 2017", "W17");
  }
}

module.exports = CoralMerfolk;
