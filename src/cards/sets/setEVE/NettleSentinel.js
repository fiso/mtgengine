"use strict";
const Constants = require ("../../../Constants");
const NettleSentinelBase = require("../setA25/NettleSentinel");

class NettleSentinel extends NettleSentinelBase {
  constructor (game) {
    super(game, "Nettle Sentinel", "Eventide", "EVE");
  }
}

module.exports = NettleSentinel;
