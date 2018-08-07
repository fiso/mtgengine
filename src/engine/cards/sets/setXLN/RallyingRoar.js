"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RallyingRoar extends UnimplementedCard {
  constructor (game) {
    super(game, "Rallying Roar", "Ixalan", "XLN");
  }
}

module.exports = RallyingRoar;
