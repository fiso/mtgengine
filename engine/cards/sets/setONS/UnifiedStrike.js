"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnifiedStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Unified Strike", "Onslaught", "ONS");
  }
}

module.exports = UnifiedStrike;
