"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarlitSanctum extends UnimplementedCard {
  constructor (game) {
    super(game, "Starlit Sanctum", "Onslaught", "ONS");
  }
}

module.exports = StarlitSanctum;
