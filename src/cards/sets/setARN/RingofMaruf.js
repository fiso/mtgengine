"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofMaruf extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Ma'rûf", "Arabian Nights", "ARN");
  }
}

module.exports = RingofMaruf;
