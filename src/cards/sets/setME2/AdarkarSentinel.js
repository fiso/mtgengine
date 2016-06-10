"use strict";
const Constants = require ("../../../Constants");
const AdarkarSentinelBase = require("../setICE/AdarkarSentinel");

class AdarkarSentinel extends AdarkarSentinelBase {
  constructor (game) {
    super(game, "Adarkar Sentinel", "Masters Edition II", "ME2");
  }
}

module.exports = AdarkarSentinel;
