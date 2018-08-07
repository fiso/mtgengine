"use strict";
const Constants = require ("../../../Constants");
const StoicChampionBase = require("../setVMA/StoicChampion");

class StoicChampion extends StoicChampionBase {
  constructor (game) {
    super(game, "Stoic Champion", "Legions", "LGN");
  }
}

module.exports = StoicChampion;
