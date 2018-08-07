"use strict";
const Constants = require ("../../../Constants");
const GoblinWarDrumsBase = require("../setA25/GoblinWarDrums");

class GoblinWarDrums extends GoblinWarDrumsBase {
  constructor (game) {
    super(game, "Goblin War Drums", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinWarDrums;
