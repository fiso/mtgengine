"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DriftingDjinn extends UnimplementedCard {
  constructor(game) {
    super(game, "Drifting Djinn", "Urza's Saga", "USG");
  }
}

module.exports = DriftingDjinn;
