"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletalVampire extends Card {
  constructor(game) {
    super(game, "Skeletal Vampire", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SkeletalVampire;
