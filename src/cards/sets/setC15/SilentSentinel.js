"use strict";
const Constants = require ("../../../Constants");
const SilentSentinelBase = require("../setBNG/SilentSentinel");

class SilentSentinel extends SilentSentinelBase {
  constructor(game) {
    super(game, "Silent Sentinel", "Commander 2015", "C15");
  }
}

module.exports = SilentSentinel;
