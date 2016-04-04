"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EliteInquisitorBase = require("../setISD/EliteInquisitor.js");

class EliteInquisitor extends EliteInquisitorBase {
  constructor(game) {
    super(game, "Elite Inquisitor", "Magic Game Day", "pMGD");
  }
}

module.exports = EliteInquisitor;
