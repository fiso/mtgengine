"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalKathari extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletal Kathari", "Shards of Alara", "ALA");
  }
}

module.exports = SkeletalKathari;
