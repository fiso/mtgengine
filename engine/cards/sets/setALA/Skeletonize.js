"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Skeletonize extends Card {
  constructor(game) {
    super(game, "Skeletonize", "Shards of Alara", "ALA");
  }
}

module.exports = Skeletonize;
