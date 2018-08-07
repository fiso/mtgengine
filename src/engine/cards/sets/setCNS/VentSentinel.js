"use strict";
const Constants = require ("../../../Constants");
const VentSentinelBase = require("../setIMA/VentSentinel");

class VentSentinel extends VentSentinelBase {
  constructor (game) {
    super(game, "Vent Sentinel", "Conspiracy", "CNS");
  }
}

module.exports = VentSentinel;
