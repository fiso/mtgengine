"use strict";
const Constants = require ("../../../Constants");
const RealityAnchorBase = require("../setTPR/RealityAnchor");

class RealityAnchor extends RealityAnchorBase {
  constructor (game) {
    super(game, "Reality Anchor", "Tempest", "TMP");
  }
}

module.exports = RealityAnchor;
