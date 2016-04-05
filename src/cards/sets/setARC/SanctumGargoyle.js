"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Sanctum Gargoyle", "Archenemy", "ARC");
  }
}

module.exports = SanctumGargoyle;
