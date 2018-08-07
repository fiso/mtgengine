"use strict";
const Constants = require ("../../../Constants");
const LaquatussChampionBase = require("../setA25/LaquatussChampion");

class LaquatussChampion extends LaquatussChampionBase {
  constructor (game) {
    super(game, "Laquatus's Champion", "Prerelease Events", "PPRE");
  }
}

module.exports = LaquatussChampion;
