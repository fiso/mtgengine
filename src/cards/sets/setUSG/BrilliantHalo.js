"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrilliantHalo extends UnimplementedCard {
  constructor (game) {
    super(game, "Brilliant Halo", "Urza's Saga", "USG");
  }
}

module.exports = BrilliantHalo;
