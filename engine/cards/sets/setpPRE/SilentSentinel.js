"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilentSentinelBase = require("../setBNG/SilentSentinel.js");

class SilentSentinel extends SilentSentinelBase {
  constructor(game) {
    super(game, "Silent Sentinel", "Prerelease Events", "pPRE");
  }
}

module.exports = SilentSentinel;
