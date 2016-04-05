"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skeletonize extends UnimplementedCard {
  constructor(game) {
    super(game, "Skeletonize", "Shards of Alara", "ALA");
  }
}

module.exports = Skeletonize;
