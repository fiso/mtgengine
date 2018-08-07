"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RingofMaruf extends UnimplementedCard {
  constructor (game) {
    super(game, "Ring of Ma'rûf", "Masters Edition", "MED");
  }
}

module.exports = RingofMaruf;
