"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Wanderer", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundWanderer;
