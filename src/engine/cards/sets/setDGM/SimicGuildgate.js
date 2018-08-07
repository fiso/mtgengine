"use strict";
const Constants = require ("../../../Constants");
const SimicGuildgateBase = require("../setCMA/SimicGuildgate");

class SimicGuildgate extends SimicGuildgateBase {
  constructor (game) {
    super(game, "Simic Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = SimicGuildgate;
