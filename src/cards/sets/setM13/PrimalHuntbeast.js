"use strict";
const Constants = require ("../../../Constants");
const PrimalHuntbeastBase = require("../setBBD/PrimalHuntbeast");

class PrimalHuntbeast extends PrimalHuntbeastBase {
  constructor (game) {
    super(game, "Primal Huntbeast", "Magic 2013", "M13");
  }
}

module.exports = PrimalHuntbeast;
