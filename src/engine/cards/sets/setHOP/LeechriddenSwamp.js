"use strict";
const Constants = require ("../../../Constants");
const LeechriddenSwampBase = require("../setDDR/LeechriddenSwamp");

class LeechriddenSwamp extends LeechriddenSwampBase {
  constructor (game) {
    super(game, "Leechridden Swamp", "Planechase", "HOP");
  }
}

module.exports = LeechriddenSwamp;
