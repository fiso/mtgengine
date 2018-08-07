"use strict";
const Constants = require ("../../../Constants");
const GoblinGloryChaserBase = require("../setDDT/GoblinGloryChaser");

class GoblinGloryChaser extends GoblinGloryChaserBase {
  constructor (game) {
    super(game, "Goblin Glory Chaser", "Magic Origins", "ORI");
  }
}

module.exports = GoblinGloryChaser;
