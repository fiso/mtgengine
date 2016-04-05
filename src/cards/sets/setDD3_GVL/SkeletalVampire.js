"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeletal Vampire", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SkeletalVampire;
