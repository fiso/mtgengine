"use strict";
const Constants = require ("../../../Constants");
const GoblinMountaineerBase = require("../setALA/GoblinMountaineer");

class GoblinMountaineer extends GoblinMountaineerBase {
  constructor (game) {
    super(game, "Goblin Mountaineer", "Portal Second Age", "P02");
  }
}

module.exports = GoblinMountaineer;
