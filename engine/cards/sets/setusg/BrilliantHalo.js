"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrilliantHalo extends Card {
  constructor(game) {
    super(game, "Brilliant Halo", "Urza's Saga", "USG");
  }
}

module.exports = BrilliantHalo;
