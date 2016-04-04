"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VentSentinelBase = require("../setCNS/VentSentinel.js");

class VentSentinel extends VentSentinelBase {
  constructor(game) {
    super(game, "Vent Sentinel", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VentSentinel;
