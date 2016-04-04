"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RavenousRats extends Card {
  constructor(game) {
    super(game, "Ravenous Rats", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = RavenousRats;
