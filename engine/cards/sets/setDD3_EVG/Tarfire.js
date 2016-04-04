"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tarfire extends Card {
  constructor(game) {
    super(game, "Tarfire", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Tarfire;
