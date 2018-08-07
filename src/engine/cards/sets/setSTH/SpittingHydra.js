"use strict";
const Constants = require ("../../../Constants");
const SpittingHydraBase = require("../setTPR/SpittingHydra");

class SpittingHydra extends SpittingHydraBase {
  constructor (game) {
    super(game, "Spitting Hydra", "Stronghold", "STH");
  }
}

module.exports = SpittingHydra;
