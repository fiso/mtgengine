"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerrasSanctum extends UnimplementedCard {
  constructor(game) {
    super(game, "Serra's Sanctum", "Urza's Saga", "USG");
  }
}

module.exports = SerrasSanctum;
