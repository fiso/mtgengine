"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeSkeletons extends UnimplementedCard {
  constructor (game) {
    super(game, "Drudge Skeletons", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = DrudgeSkeletons;
