"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WirewoodHerald extends Card {
  constructor(game) {
    super(game, "Wirewood Herald", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = WirewoodHerald;
