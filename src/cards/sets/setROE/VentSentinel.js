"use strict";
const Constants = require ("../../../Constants");
const VentSentinelBase = require("../setCNS/VentSentinel");

class VentSentinel extends VentSentinelBase {
  constructor (game) {
    super(game, "Vent Sentinel", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VentSentinel;
