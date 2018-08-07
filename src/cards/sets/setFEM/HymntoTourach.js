"use strict";
const Constants = require ("../../../Constants");
const HymntoTourachBase = require("../setEMA/HymntoTourach");

class HymntoTourach extends HymntoTourachBase {
  constructor (game) {
    super(game, "Hymn to Tourach", "Fallen Empires", "FEM");
  }
}

module.exports = HymntoTourach;
