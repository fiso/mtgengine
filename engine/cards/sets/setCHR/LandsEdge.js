"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandsEdge extends UnimplementedCard {
  constructor(game) {
    super(game, "Land's Edge", "Chronicles", "CHR");
  }
}

module.exports = LandsEdge;
