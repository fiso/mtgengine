"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundHybrid extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Hybrid", "Darksteel", "DST");
  }
}

module.exports = ArcboundHybrid;
