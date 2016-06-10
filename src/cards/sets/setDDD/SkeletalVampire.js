"use strict";
const Constants = require ("../../../Constants");
const SkeletalVampireBase = require("../setDD3_GVL/SkeletalVampire");

class SkeletalVampire extends SkeletalVampireBase {
  constructor (game) {
    super(game, "Skeletal Vampire", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = SkeletalVampire;
