"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArcboundWandererBase = require("../set5DN/ArcboundWanderer.js");

class ArcboundWanderer extends ArcboundWandererBase {
  constructor(game) {
    super(game, "Arcbound Wanderer", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWanderer;
