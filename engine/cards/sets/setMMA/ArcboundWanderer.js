"use strict";
const Constants = require ("../../../Constants");
const ArcboundWandererBase = require("../set5DN/ArcboundWanderer");

class ArcboundWanderer extends ArcboundWandererBase {
  constructor(game) {
    super(game, "Arcbound Wanderer", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWanderer;
