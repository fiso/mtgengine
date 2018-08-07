"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletal Vampire", "Commander 2017", "C17");
  }
}

module.exports = SkeletalVampire;
