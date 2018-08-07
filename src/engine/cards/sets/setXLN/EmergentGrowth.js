"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmergentGrowth extends UnimplementedCard {
  constructor (game) {
    super(game, "Emergent Growth", "Ixalan", "XLN");
  }
}

module.exports = EmergentGrowth;
