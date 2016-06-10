"use strict";
const Constants = require ("../../../Constants");
const DriftoftheDeadBase = require("../setCST/DriftoftheDead");

class DriftoftheDead extends DriftoftheDeadBase {
  constructor (game) {
    super(game, "Drift of the Dead", "Ice Age", "ICE");
  }
}

module.exports = DriftoftheDead;
