"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunedStalactite extends UnimplementedCard {
  constructor(game) {
    super(game, "Runed Stalactite", "Lorwyn", "LRW");
  }
}

module.exports = RunedStalactite;
