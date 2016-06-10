"use strict";
const Constants = require ("../../../Constants");
const EliteInquisitorBase = require("../setISD/EliteInquisitor");

class EliteInquisitor extends EliteInquisitorBase {
  constructor (game) {
    super(game, "Elite Inquisitor", "Magic Game Day", "pMGD");
  }
}

module.exports = EliteInquisitor;
