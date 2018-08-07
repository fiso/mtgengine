"use strict";
const Constants = require ("../../../Constants");
const DeeprootChampionBase = require("../setXLN/DeeprootChampion");

class DeeprootChampion extends DeeprootChampionBase {
  constructor (game) {
    super(game, "Deeproot Champion", "Ixalan Promos", "PXLN");
  }
}

module.exports = DeeprootChampion;
