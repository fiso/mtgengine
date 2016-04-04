"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnifiedFront extends Card {
  constructor(game) {
    super(game, "Unified Front", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UnifiedFront;
