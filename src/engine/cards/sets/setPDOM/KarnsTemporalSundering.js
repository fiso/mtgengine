"use strict";
const Constants = require ("../../../Constants");
const KarnsTemporalSunderingBase = require("../setDOM/KarnsTemporalSundering");

class KarnsTemporalSundering extends KarnsTemporalSunderingBase {
  constructor (game) {
    super(game, "Karn's Temporal Sundering", "Dominaria Promos", "PDOM");
  }
}

module.exports = KarnsTemporalSundering;
