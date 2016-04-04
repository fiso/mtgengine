"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirGuildmageBase = require("../setMM2/DimirGuildmage.js");

class DimirGuildmage extends DimirGuildmageBase {
  constructor(game) {
    super(game, "Dimir Guildmage", "Release Events", "pREL");
  }
}

module.exports = DimirGuildmage;
