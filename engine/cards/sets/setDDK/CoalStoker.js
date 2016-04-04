"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalStoker extends Card {
  constructor(game) {
    super(game, "Coal Stoker", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = CoalStoker;
