"use strict";
const Constants = require ("../../../Constants");
const BreakingPointBase = require("../setDDK/BreakingPoint");

class BreakingPoint extends BreakingPointBase {
  constructor(game) {
    super(game, "Breaking Point", "Judgment", "JUD");
  }
}

module.exports = BreakingPoint;
