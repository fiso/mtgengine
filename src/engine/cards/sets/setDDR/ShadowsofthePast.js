"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowsofthePast extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadows of the Past", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = ShadowsofthePast;
