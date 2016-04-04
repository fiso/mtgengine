"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirGuildgateBase = require("../setC13/DimirGuildgate.js");

class DimirGuildgate extends DimirGuildgateBase {
  constructor(game) {
    super(game, "Dimir Guildgate", "Dragon's Maze", "DGM");
  }
}

module.exports = DimirGuildgate;
