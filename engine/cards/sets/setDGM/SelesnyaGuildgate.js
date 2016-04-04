"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaGuildgateBase = require("../setC13/SelesnyaGuildgate.js");

class SelesnyaGuildgate extends SelesnyaGuildgateBase {
  constructor(game) {
    super(game, "Selesnya Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = SelesnyaGuildgate;
