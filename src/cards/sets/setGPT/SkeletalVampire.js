"use strict";
const Constants = require ("../../../Constants");
const SkeletalVampireBase = require("../setC17/SkeletalVampire");

class SkeletalVampire extends SkeletalVampireBase {
  constructor (game) {
    super(game, "Skeletal Vampire", "Guildpact", "GPT");
  }
}

module.exports = SkeletalVampire;
