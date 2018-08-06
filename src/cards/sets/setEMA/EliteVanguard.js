"use strict";
const Constants = require ("../../../Constants");
const EliteVanguardBase = require("../setDDF/EliteVanguard");

class EliteVanguard extends EliteVanguardBase {
  constructor (game) {
    super(game, "Elite Vanguard", "Eternal Masters", "EMA");
  }
}

module.exports = EliteVanguard;
