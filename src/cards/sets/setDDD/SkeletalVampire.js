"use strict";
const Constants = require ("../../../Constants");
const SkeletalVampireBase = require("../setC17/SkeletalVampire");

class SkeletalVampire extends SkeletalVampireBase {
  constructor (game) {
    super(game, "Skeletal Vampire", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = SkeletalVampire;
