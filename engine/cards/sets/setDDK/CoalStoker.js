"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalStoker extends UnimplementedCard {
  constructor(game) {
    super(game, "Coal Stoker", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = CoalStoker;
