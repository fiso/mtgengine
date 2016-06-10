"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityAnchor extends UnimplementedCard {
  constructor (game) {
    super(game, "Reality Anchor", "Tempest", "TMP");
  }
}

module.exports = RealityAnchor;
