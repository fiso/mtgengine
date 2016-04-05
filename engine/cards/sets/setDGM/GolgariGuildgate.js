"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setC13/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor(game) {
    super(game, "Golgari Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = GolgariGuildgate;
