"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DimirInfiltratorBase = require("../setPC2/DimirInfiltrator.js");

class DimirInfiltrator extends DimirInfiltratorBase {
  constructor(game) {
    super(game, "Dimir Infiltrator", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirInfiltrator;
