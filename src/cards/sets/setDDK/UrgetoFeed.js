"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrgetoFeed extends UnimplementedCard {
  constructor (game) {
    super(game, "Urge to Feed", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = UrgetoFeed;
