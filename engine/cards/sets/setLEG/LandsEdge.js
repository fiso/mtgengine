"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LandsEdgeBase = require("../setCHR/LandsEdge.js");

class LandsEdge extends LandsEdgeBase {
  constructor(game) {
    super(game, "Land's Edge", "Legends", "LEG");
  }
}

module.exports = LandsEdge;
