"use strict";
const Constants = require ("../../../Constants");
const IndrikStomphowlerBase = require("../setCMA/IndrikStomphowler");

class IndrikStomphowler extends IndrikStomphowlerBase {
  constructor (game) {
    super(game, "Indrik Stomphowler", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = IndrikStomphowler;
