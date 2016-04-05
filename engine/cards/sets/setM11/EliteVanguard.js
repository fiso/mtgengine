"use strict";
const Constants = require ("../../../Constants");
const EliteVanguardBase = require("../setDDF/EliteVanguard");

class EliteVanguard extends EliteVanguardBase {
  constructor(game) {
    super(game, "Elite Vanguard", "Magic 2011", "M11");
  }
}

module.exports = EliteVanguard;
