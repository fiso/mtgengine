"use strict";
const Constants = require ("../../../Constants");
const SpawningPoolBase = require("../set10E/SpawningPool");

class SpawningPool extends SpawningPoolBase {
  constructor (game) {
    super(game, "Spawning Pool", "World Championship Decks 1999", "WC99");
  }
}

module.exports = SpawningPool;
