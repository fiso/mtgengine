"use strict";
const Constants = require ("../../../Constants");
const DungeonShadeBase = require("../setSTH/DungeonShade");

class DungeonShade extends DungeonShadeBase {
  constructor(game) {
    super(game, "Dungeon Shade", "Tempest Remastered", "TPR");
  }
}

module.exports = DungeonShade;
