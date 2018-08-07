"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalChangeling extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletal Changeling", "Lorwyn", "LRW");
  }
}

module.exports = SkeletalChangeling;
