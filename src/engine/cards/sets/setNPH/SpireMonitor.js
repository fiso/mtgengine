"use strict";
const Constants = require ("../../../Constants");
const SpireMonitorBase = require("../setMM3/SpireMonitor");

class SpireMonitor extends SpireMonitorBase {
  constructor (game) {
    super(game, "Spire Monitor", "New Phyrexia", "NPH");
  }
}

module.exports = SpireMonitor;
