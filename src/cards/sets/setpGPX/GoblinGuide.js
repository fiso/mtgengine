"use strict";
const Constants = require ("../../../Constants");
const GoblinGuideBase = require("../setMM3/GoblinGuide");

class GoblinGuide extends GoblinGuideBase {
  constructor (game) {
    super(game, "Goblin Guide", "Grand Prix Promos", "PGPX");
  }
}

module.exports = GoblinGuide;
