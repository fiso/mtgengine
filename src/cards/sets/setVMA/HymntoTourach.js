"use strict";
const Constants = require ("../../../Constants");
const HymntoTourachBase = require("../setATH/HymntoTourach");

class HymntoTourach extends HymntoTourachBase {
  constructor(game) {
    super(game, "Hymn to Tourach", "Vintage Masters", "VMA");
  }
}

module.exports = HymntoTourach;
