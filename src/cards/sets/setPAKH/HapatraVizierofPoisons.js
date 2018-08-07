"use strict";
const Constants = require ("../../../Constants");
const HapatraVizierofPoisonsBase = require("../setAKH/HapatraVizierofPoisons");

class HapatraVizierofPoisons extends HapatraVizierofPoisonsBase {
  constructor (game) {
    super(game, "Hapatra, Vizier of Poisons", "Amonkhet Promos", "PAKH");
  }
}

module.exports = HapatraVizierofPoisons;
