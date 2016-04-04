"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlameblastDragonBase = require("../setARC/FlameblastDragon.js");

class FlameblastDragon extends FlameblastDragonBase {
  constructor(game) {
    super(game, "Flameblast Dragon", "Shards of Alara", "ALA");
  }
}

module.exports = FlameblastDragon;
