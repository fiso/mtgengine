"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnifiedWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Unified Will", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UnifiedWill;
