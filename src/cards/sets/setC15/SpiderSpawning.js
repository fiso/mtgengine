"use strict";
const Constants = require ("../../../Constants");
const SpiderSpawningBase = require("../setCMA/SpiderSpawning");

class SpiderSpawning extends SpiderSpawningBase {
  constructor (game) {
    super(game, "Spider Spawning", "Commander 2015", "C15");
  }
}

module.exports = SpiderSpawning;
