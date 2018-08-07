"use strict";
const Constants = require ("../../../Constants");
const BrilliantHaloBase = require("../setVMA/BrilliantHalo");

class BrilliantHalo extends BrilliantHaloBase {
  constructor (game) {
    super(game, "Brilliant Halo", "Urza's Saga", "USG");
  }
}

module.exports = BrilliantHalo;
