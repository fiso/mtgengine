"use strict";
const Constants = require ("../../../Constants");
const DimirGuildmageBase = require("../setMM2/DimirGuildmage");

class DimirGuildmage extends DimirGuildmageBase {
  constructor (game) {
    super(game, "Dimir Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirGuildmage;
