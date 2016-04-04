"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletonKey extends Card {
  constructor(game) {
    super(game, "Skeleton Key", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkeletonKey;
