"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RunedStalactite extends Card {
  constructor(game) {
    super(game, "Runed Stalactite", "Lorwyn", "LRW");
  }
}

module.exports = RunedStalactite;
