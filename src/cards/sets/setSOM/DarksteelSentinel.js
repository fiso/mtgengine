"use strict";
const Constants = require ("../../../Constants");
const DarksteelSentinelBase = require("../setTD2/DarksteelSentinel");

class DarksteelSentinel extends DarksteelSentinelBase {
  constructor (game) {
    super(game, "Darksteel Sentinel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelSentinel;
