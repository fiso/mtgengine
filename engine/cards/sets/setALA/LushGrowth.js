"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LushGrowth extends Card {
  constructor(game) {
    super(game, "Lush Growth", "Shards of Alara", "ALA");
  }
}

module.exports = LushGrowth;
