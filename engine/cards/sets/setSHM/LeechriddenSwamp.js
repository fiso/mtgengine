"use strict";
const Constants = require ("../../../Constants");
const LeechriddenSwampBase = require("../setHOP/LeechriddenSwamp");

class LeechriddenSwamp extends LeechriddenSwampBase {
  constructor(game) {
    super(game, "Leechridden Swamp", "Shadowmoor", "SHM");
  }
}

module.exports = LeechriddenSwamp;
