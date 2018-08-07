"use strict";
const Constants = require ("../../../Constants");
const SilentSentinelBase = require("../setC18/SilentSentinel");

class SilentSentinel extends SilentSentinelBase {
  constructor (game) {
    super(game, "Silent Sentinel", "Born of the Gods Promos", "PBNG");
  }
}

module.exports = SilentSentinel;
