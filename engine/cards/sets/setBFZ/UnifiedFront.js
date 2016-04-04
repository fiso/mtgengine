"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnifiedFront extends UnimplementedCard {
  constructor(game) {
    super(game, "Unified Front", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UnifiedFront;
