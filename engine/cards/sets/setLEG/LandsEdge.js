"use strict";
const Constants = require ("../../../Constants");
const LandsEdgeBase = require("../setCHR/LandsEdge");

class LandsEdge extends LandsEdgeBase {
  constructor(game) {
    super(game, "Land's Edge", "Legends", "LEG");
  }
}

module.exports = LandsEdge;
