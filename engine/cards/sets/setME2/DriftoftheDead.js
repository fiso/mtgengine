"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DriftoftheDeadBase = require("../setCST/DriftoftheDead.js");

class DriftoftheDead extends DriftoftheDeadBase {
  constructor(game) {
    super(game, "Drift of the Dead", "Masters Edition II", "ME2");
  }
}

module.exports = DriftoftheDead;
