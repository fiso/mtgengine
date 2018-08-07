"use strict";
const Constants = require ("../../../Constants");
const DimirInfiltratorBase = require("../setPCA/DimirInfiltrator");

class DimirInfiltrator extends DimirInfiltratorBase {
  constructor (game) {
    super(game, "Dimir Infiltrator", "Planechase 2012", "PC2");
  }
}

module.exports = DimirInfiltrator;
