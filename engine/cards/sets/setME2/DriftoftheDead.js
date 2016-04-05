"use strict";
const Constants = require ("../../../Constants");
const DriftoftheDeadBase = require("../setCST/DriftoftheDead");

class DriftoftheDead extends DriftoftheDeadBase {
  constructor(game) {
    super(game, "Drift of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DriftoftheDead;
