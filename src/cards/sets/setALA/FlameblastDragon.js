"use strict";
const Constants = require ("../../../Constants");
const FlameblastDragonBase = require("../setC18/FlameblastDragon");

class FlameblastDragon extends FlameblastDragonBase {
  constructor (game) {
    super(game, "Flameblast Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = FlameblastDragon;
