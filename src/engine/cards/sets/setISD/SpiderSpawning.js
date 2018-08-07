"use strict";
const Constants = require ("../../../Constants");
const SpiderSpawningBase = require("../setCMA/SpiderSpawning");

class SpiderSpawning extends SpiderSpawningBase {
  constructor (game) {
    super(game, "Spider Spawning", "Innistrad", "ISD");
  }
}

module.exports = SpiderSpawning;
