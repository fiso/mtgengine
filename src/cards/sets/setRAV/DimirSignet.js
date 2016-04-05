"use strict";
const Constants = require ("../../../Constants");
const DimirSignetBase = require("../setARC/DimirSignet");

class DimirSignet extends DimirSignetBase {
  constructor(game) {
    super(game, "Dimir Signet", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirSignet;
