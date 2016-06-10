"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundWanderer extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Wanderer", "Fifth Dawn", "5DN");
  }
}

module.exports = ArcboundWanderer;
