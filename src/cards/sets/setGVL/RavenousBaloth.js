"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Baloth", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = RavenousBaloth;
