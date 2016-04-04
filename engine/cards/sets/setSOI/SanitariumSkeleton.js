"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SanitariumSkeleton extends Card {
  constructor(game) {
    super(game, "Sanitarium Skeleton", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SanitariumSkeleton;
