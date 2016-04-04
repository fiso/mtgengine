"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofMarf extends UnimplementedCard {
  constructor(game) {
    super(game, "Ring of Ma'rûf", "Arabian Nights", "ARN");
  }
}

module.exports = RingofMarf;
