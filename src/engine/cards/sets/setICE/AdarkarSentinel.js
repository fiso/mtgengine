"use strict";
const Constants = require ("../../../Constants");
const AdarkarSentinelBase = require("../setME2/AdarkarSentinel");

class AdarkarSentinel extends AdarkarSentinelBase {
  constructor (game) {
    super(game, "Adarkar Sentinel", "Ice Age", "ICE");
  }
}

module.exports = AdarkarSentinel;
