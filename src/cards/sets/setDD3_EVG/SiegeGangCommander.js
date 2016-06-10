"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeGangCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege-Gang Commander", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = SiegeGangCommander;
