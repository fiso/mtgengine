"use strict";
const Constants = require ("../../../Constants");
const ChampionofRhonasBase = require("../setAKH/ChampionofRhonas");

class ChampionofRhonas extends ChampionofRhonasBase {
  constructor (game) {
    super(game, "Champion of Rhonas", "Amonkhet Promos", "PAKH");
  }
}

module.exports = ChampionofRhonas;
