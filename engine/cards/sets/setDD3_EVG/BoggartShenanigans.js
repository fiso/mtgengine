"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartShenanigans extends Card {
  constructor(game) {
    super(game, "Boggart Shenanigans", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = BoggartShenanigans;
