"use strict";
const Constants = require ("../../../Constants");
const SpawningPoolBase = require("../set10E/SpawningPool");

class SpawningPool extends SpawningPoolBase {
  constructor(game) {
    super(game, "Spawning Pool", "Urza's Legacy", "ULG");
  }
}

module.exports = SpawningPool;
