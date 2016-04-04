"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnifiedStrike extends Card {
  constructor(game) {
    super(game, "Unified Strike", "Onslaught", "ONS");
  }
}

module.exports = UnifiedStrike;
