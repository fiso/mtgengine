"use strict";
const Constants = require ("../../../Constants");
const IzzetGuildgateBase = require("../setC13/IzzetGuildgate");

class IzzetGuildgate extends IzzetGuildgateBase {
  constructor(game) {
    super(game, "Izzet Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = IzzetGuildgate;
