"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SiegeGangCommander extends Card {
  constructor(game) {
    super(game, "Siege-Gang Commander", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SiegeGangCommander;
