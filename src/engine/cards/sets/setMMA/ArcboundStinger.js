"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundStinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcbound Stinger", "Modern Masters", "MMA");
  }
}

module.exports = ArcboundStinger;
