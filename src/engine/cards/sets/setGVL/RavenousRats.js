"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Rats", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = RavenousRats;
