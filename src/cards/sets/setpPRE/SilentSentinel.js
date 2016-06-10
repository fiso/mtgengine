"use strict";
const Constants = require ("../../../Constants");
const SilentSentinelBase = require("../setBNG/SilentSentinel");

class SilentSentinel extends SilentSentinelBase {
  constructor (game) {
    super(game, "Silent Sentinel", "Prerelease Events", "pPRE");
  }
}

module.exports = SilentSentinel;
