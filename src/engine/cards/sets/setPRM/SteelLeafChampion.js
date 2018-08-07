"use strict";
const Constants = require ("../../../Constants");
const SteelLeafChampionBase = require("../setDOM/SteelLeafChampion");

class SteelLeafChampion extends SteelLeafChampionBase {
  constructor (game) {
    super(game, "Steel Leaf Champion", "Magic Online Promos", "PRM");
  }
}

module.exports = SteelLeafChampion;
