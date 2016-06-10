"use strict";
const Constants = require ("../../../Constants");
const WorldgorgerDragonBase = require("../setJUD/WorldgorgerDragon");

class WorldgorgerDragon extends WorldgorgerDragonBase {
  constructor (game) {
    super(game, "Worldgorger Dragon", "Vintage Masters", "VMA");
  }
}

module.exports = WorldgorgerDragon;
