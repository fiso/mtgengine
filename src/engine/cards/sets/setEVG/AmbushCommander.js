"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbushCommander extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambush Commander", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = AmbushCommander;
