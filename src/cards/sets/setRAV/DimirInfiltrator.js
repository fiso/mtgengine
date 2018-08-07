"use strict";
const Constants = require ("../../../Constants");
const DimirInfiltratorBase = require("../setPCA/DimirInfiltrator");

class DimirInfiltrator extends DimirInfiltratorBase {
  constructor (game) {
    super(game, "Dimir Infiltrator", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirInfiltrator;
