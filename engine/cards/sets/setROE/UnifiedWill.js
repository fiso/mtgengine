"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnifiedWill extends Card {
  constructor(game) {
    super(game, "Unified Will", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UnifiedWill;
