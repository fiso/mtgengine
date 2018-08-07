"use strict";
const Constants = require ("../../../Constants");
const LaquatussChampionBase = require("../setA25/LaquatussChampion");

class LaquatussChampion extends LaquatussChampionBase {
  constructor (game) {
    super(game, "Laquatus's Champion", "Magic Online Promos", "PRM");
  }
}

module.exports = LaquatussChampion;
