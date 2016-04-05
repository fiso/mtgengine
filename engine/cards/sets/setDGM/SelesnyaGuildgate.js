"use strict";
const Constants = require ("../../../Constants");
const SelesnyaGuildgateBase = require("../setC13/SelesnyaGuildgate");

class SelesnyaGuildgate extends SelesnyaGuildgateBase {
  constructor(game) {
    super(game, "Selesnya Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = SelesnyaGuildgate;
