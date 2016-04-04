"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusGuildgateBase = require("../setC13/AzoriusGuildgate.js");

class AzoriusGuildgate extends AzoriusGuildgateBase {
  constructor(game) {
    super(game, "Azorius Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = AzoriusGuildgate;
