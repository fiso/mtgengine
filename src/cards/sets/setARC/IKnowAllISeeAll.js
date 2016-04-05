"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IKnowAllISeeAll extends UnimplementedCard {
  constructor(game) {
    super(game, "I Know All, I See All", "Archenemy", "ARC");
  }
}

module.exports = IKnowAllISeeAll;
