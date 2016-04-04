"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RealityAnchorBase = require("../setTMP/RealityAnchor.js");

class RealityAnchor extends RealityAnchorBase {
  constructor(game) {
    super(game, "Reality Anchor", "Tempest Remastered", "TPR");
  }
}

module.exports = RealityAnchor;
