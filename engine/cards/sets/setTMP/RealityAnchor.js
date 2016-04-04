"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealityAnchor extends Card {
  constructor(game) {
    super(game, "Reality Anchor", "Tempest", "TMP");
  }
}

module.exports = RealityAnchor;
