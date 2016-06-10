"use strict";
const Constants = require ("../../../Constants");
const SkeletalVampireBase = require("../setDD3_GVL/SkeletalVampire");

class SkeletalVampire extends SkeletalVampireBase {
  constructor (game) {
    super(game, "Skeletal Vampire", "Modern Masters", "MMA");
  }
}

module.exports = SkeletalVampire;
