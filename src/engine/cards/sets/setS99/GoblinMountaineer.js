"use strict";
const Constants = require ("../../../Constants");
const GoblinMountaineerBase = require("../setALA/GoblinMountaineer");

class GoblinMountaineer extends GoblinMountaineerBase {
  constructor (game) {
    super(game, "Goblin Mountaineer", "Starter 1999", "S99");
  }
}

module.exports = GoblinMountaineer;
