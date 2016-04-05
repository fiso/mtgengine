"use strict";
const Constants = require ("../../../Constants");
const HymntoTourachBase = require("../setATH/HymntoTourach");

class HymntoTourach extends HymntoTourachBase {
  constructor(game) {
    super(game, "Hymn to Tourach", "From the Vault: Twenty", "V13");
  }
}

module.exports = HymntoTourach;
