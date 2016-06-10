"use strict";
const Constants = require ("../../../Constants");
const RakdosGuildgateBase = require("../setC13/RakdosGuildgate");

class RakdosGuildgate extends RakdosGuildgateBase {
  constructor (game) {
    super(game, "Rakdos Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = RakdosGuildgate;
