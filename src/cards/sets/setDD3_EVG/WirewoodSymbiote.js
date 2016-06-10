"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WirewoodSymbiote extends UnimplementedCard {
  constructor (game) {
    super(game, "Wirewood Symbiote", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = WirewoodSymbiote;
