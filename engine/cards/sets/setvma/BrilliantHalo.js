"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrilliantHaloBase = require("../setUSG/BrilliantHalo.js");

class BrilliantHalo extends BrilliantHaloBase {
  constructor(game) {
    super(game, "Brilliant Halo", "Vintage Masters", "VMA");
  }
}

module.exports = BrilliantHalo;
