"use strict";
const Constants = require ("../../../Constants");
const BrilliantHaloBase = require("../setUSG/BrilliantHalo");

class BrilliantHalo extends BrilliantHaloBase {
  constructor (game) {
    super(game, "Brilliant Halo", "Vintage Masters", "VMA");
  }
}

module.exports = BrilliantHalo;
