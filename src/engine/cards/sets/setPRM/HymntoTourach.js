"use strict";
const Constants = require ("../../../Constants");
const HymntoTourachBase = require("../setEMA/HymntoTourach");

class HymntoTourach extends HymntoTourachBase {
  constructor (game) {
    super(game, "Hymn to Tourach", "Magic Online Promos", "PRM");
  }
}

module.exports = HymntoTourach;
