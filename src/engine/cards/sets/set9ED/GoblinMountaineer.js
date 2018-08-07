"use strict";
const Constants = require ("../../../Constants");
const GoblinMountaineerBase = require("../setALA/GoblinMountaineer");

class GoblinMountaineer extends GoblinMountaineerBase {
  constructor (game) {
    super(game, "Goblin Mountaineer", "Ninth Edition", "9ED");
  }
}

module.exports = GoblinMountaineer;
