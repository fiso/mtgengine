"use strict";
const Constants = require ("../../../Constants");
const StoicChampionBase = require("../setLGN/StoicChampion");

class StoicChampion extends StoicChampionBase {
  constructor (game) {
    super(game, "Stoic Champion", "Vintage Masters", "VMA");
  }
}

module.exports = StoicChampion;
