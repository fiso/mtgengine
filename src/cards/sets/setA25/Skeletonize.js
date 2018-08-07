"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skeletonize extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletonize", "Masters 25", "A25");
  }
}

module.exports = Skeletonize;
