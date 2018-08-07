"use strict";
const Constants = require ("../../../Constants");
const DimirGuildmageBase = require("../setMM2/DimirGuildmage");

class DimirGuildmage extends DimirGuildmageBase {
  constructor (game) {
    super(game, "Dimir Guildmage", "Magic Online Promos", "PRM");
  }
}

module.exports = DimirGuildmage;
