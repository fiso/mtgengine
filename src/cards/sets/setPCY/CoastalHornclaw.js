"use strict";
const Constants = require ("../../../Constants");
const CoastalHornclawBase = require("../set8ED/CoastalHornclaw");

class CoastalHornclaw extends CoastalHornclawBase {
  constructor(game) {
    super(game, "Coastal Hornclaw", "Prophecy", "PCY");
  }
}

module.exports = CoastalHornclaw;
