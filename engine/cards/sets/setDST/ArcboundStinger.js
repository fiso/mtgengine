"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcboundStinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcbound Stinger", "Darksteel", "DST");
  }
}

module.exports = ArcboundStinger;
