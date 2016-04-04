"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeechriddenSwampBase = require("../setHOP/LeechriddenSwamp.js");

class LeechriddenSwamp extends LeechriddenSwampBase {
  constructor(game) {
    super(game, "Leechridden Swamp", "Shadowmoor", "SHM");
  }
}

module.exports = LeechriddenSwamp;
