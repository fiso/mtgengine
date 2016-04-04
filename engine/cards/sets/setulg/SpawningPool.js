"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpawningPoolBase = require("../set10E/SpawningPool.js");

class SpawningPool extends SpawningPoolBase {
  constructor(game) {
    super(game, "Spawning Pool", "Urza's Legacy", "ULG");
  }
}

module.exports = SpawningPool;
