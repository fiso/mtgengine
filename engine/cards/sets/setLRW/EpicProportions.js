"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EpicProportions extends Card {
  constructor(game) {
    super(game, "Epic Proportions", "Lorwyn", "LRW");
  }
}

module.exports = EpicProportions;
