"use strict";
const Constants = require ("../../../Constants");
const RealityAnchorBase = require("../setTMP/RealityAnchor");

class RealityAnchor extends RealityAnchorBase {
  constructor(game) {
    super(game, "Reality Anchor", "Tempest Remastered", "TPR");
  }
}

module.exports = RealityAnchor;
