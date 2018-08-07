"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodLodge extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Lodge", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = WirewoodLodge;
