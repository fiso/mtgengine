"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UrgetoFeed extends Card {
  constructor(game) {
    super(game, "Urge to Feed", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = UrgetoFeed;
