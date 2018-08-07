"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumPrelate extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Prelate", "You Make the Cube", "PZ2");
  }
}

module.exports = SanctumPrelate;
