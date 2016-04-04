"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ViashinoSkeleton extends Card {
  constructor(game) {
    super(game, "Viashino Skeleton", "Shards of Alara", "ALA");
  }
}

module.exports = ViashinoSkeleton;
