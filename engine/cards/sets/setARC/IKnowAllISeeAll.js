"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IKnowAllISeeAll extends Card {
  constructor(game) {
    super(game, "I Know All, I See All", "Archenemy", "ARC");
  }
}

module.exports = IKnowAllISeeAll;
