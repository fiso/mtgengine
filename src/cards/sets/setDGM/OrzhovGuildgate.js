"use strict";
const Constants = require ("../../../Constants");
const OrzhovGuildgateBase = require("../setC18/OrzhovGuildgate");

class OrzhovGuildgate extends OrzhovGuildgateBase {
  constructor (game) {
    super(game, "Orzhov Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = OrzhovGuildgate;
