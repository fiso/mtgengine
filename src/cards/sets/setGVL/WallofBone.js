"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofBone extends UnimplementedCard {
  constructor (game) {
    super(game, "Wall of Bone", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = WallofBone;
